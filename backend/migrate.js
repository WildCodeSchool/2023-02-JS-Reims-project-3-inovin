require("dotenv").config();

const argon2 = require("@node-rs/argon2");
const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`drop database if exists ${DB_NAME}`);
  await connection.query(`create database ${DB_NAME}`);
  await connection.query(`use ${DB_NAME}`);

  const sql = fs.readFileSync("./database.sql", "utf8");

  await connection.query(sql);

  const hashedPassword = await argon2.hash("admin");

  await connection.query(
    `INSERT INTO user (firstname, lastname, email, hashedPassword,choice_of_tastes, is_admin) VALUES (?,?,?,?,?,?)`,
    ["fred", "richard", "fred@hotmail.fr", hashedPassword, "blanc", true]
  );

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
