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
      `select id, email, hashedPassword, is_admin from  ${this.table} where email = ?`,
      [email]
    );
  }

  findAll() {
    return this.database.query(
      `select id, firstname, lastname, date_of_birth, email, comment, choice_of_tastes from  ${this.table}`
    );
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, date_of_birth, email, numberPhone, comment, hashedPassword, choice_of_tastes) values (?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        user.firstName,
        user.lastName,
        user.dateOfBirth,
        user.email,
        user.numberPhone,
        user.comment,
        user.hashedPassword,
        user.choiceOfTastes,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, date_of_birth = ?, email = ?, comment = ? ,numberPhone = ?, hashedPassword = ?, choice_of_tastes = ?, where id = ?`,
      [
        user.firstName,
        user.lastName,
        user.dateOfBirth,
        user.email,
        user.numberPhone,
        user.comment,
        user.hashedPassword,
        user.choiceOfTastes,
        user.id,
      ]
    );
  }

  modification(user, id) {
    return this.database.query(
      `update ${this.table} set firstname = ?, lastname = ?, email = ?,numberPhone = ? where id = ?`,
      [user.firstname, user.lastname, user.email, user.numberPhone, id]
    );
  }
}

module.exports = UserManager;
