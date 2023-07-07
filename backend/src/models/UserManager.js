const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findByEmailWithHashedPassword(email) {
    return this.database.query(
      `select id, email, hashedPassword from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.database.query(`select email from  ${this.table}`);
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, date_of_birth, email, hashedPassword, choice_of_tastes) values (?, ?, ?, ?, ?, ?)`,
      [
        user.firstName,
        user.lastName,
        user.dateOfBirth,
        user.email,
        user.hashedPassword,
        user.choiceOfTastes,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, date_of_birth = ?, email = ?, hashedPassword = ?, choice_of_tastes = ?, where id = ?`,
      [
        user.firstName,
        user.lastName,
        user.dateOfBirth,
        user.email,
        user.hashedPassword,
        user.choiceOfTastes,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
