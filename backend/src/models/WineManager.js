const AbstractManager = require("./AbstractManager");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "wine" });
  }

  insert(wine) {
    return this.database.query(
      `insert into ${this.table} (grape_variety) values (?)`,
      [wine.grape_variety]
    );
  }

  update(wine) {
    return this.database.query(
      `update ${this.table} set grape_variety = ? where id = ?`,
      [wine.grape_variety, wine.id]
    );
  }
}

module.exports = WineManager;
