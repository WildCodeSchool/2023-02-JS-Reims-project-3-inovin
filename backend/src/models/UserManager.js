const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname,date_of_birth) values (?,?,?)`,
      [user.firstname, user.lastname, user.date_of_birth]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set firstname = ? , lastname = ? ,date_of_birth = ? where id = ?`,
      [user.firstname, user.lastname, user.date_of_birth, user.id]
    );
  }
}

module.exports = UserManager;
