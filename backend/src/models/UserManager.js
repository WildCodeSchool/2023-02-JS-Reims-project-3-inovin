const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  findByEmailWithHashedPassword(email) {
    return this.database.query(
      `select email, hashedPassword from  ${this.table} where email = ?`,
      [email]
    );
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
      `update ${this.table} set firstname = ?, lastname = ?, date_of_birth = ?, email = ?, password = ?, choice_of_tastes = ?, where id = ?`,
      [
        user.firstName,
        user.lastName,
        user.dateOfBirth,
        user.email,
        user.password,
        user.choiceOfTastes,
        user.id,
      ]
    );
  }
}

module.exports = UserManager;
