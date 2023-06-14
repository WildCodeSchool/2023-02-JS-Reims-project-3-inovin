const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (username, firstname, lastname, date_of_birth, email, password, choice_of_tastes) values (?, ?, ?, ?, ?, ?, ?)`,
      [
        user.userName,
        user.firstName,
        user.lastName,
        user.dateOfBirth,
        user.email,
        user.password,
        user.choiceOfTastes,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set username = ?, firstname = ?, lastname = ?, date_of_birth = ?, email = ?, password = ?, choice_of_tastes = ?, where id = ?`,
      [
        user.userName,
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
