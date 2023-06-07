const AbstractManager = require("./AbstractManager");

class OptionManager extends AbstractManager {
  constructor() {
    super({ table: "option" });
  }

  insert(option) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      option.title,
    ]);
  }

  update(option) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [option.title, option.id]
    );
  }
}

module.exports = OptionManager;
