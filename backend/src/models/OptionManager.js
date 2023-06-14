const AbstractManager = require("./AbstractManager");

class ItemManager extends AbstractManager {
  constructor() {
    super({ table: "options" });
  }

  insert(options) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      options.name,
    ]);
  }

  update(options) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [options.name, options.id]
    );
  }
}

module.exports = ItemManager;
