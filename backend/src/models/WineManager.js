const AbstractManager = require("./AbstractManager");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "wine" });
  }

  insert(wine) {
    return this.database.query(
      `insert into ${this.table} (color,name, grape_variety) values (?,?,?)`,
      [wine.color, wine.name, wine.grape_variety]
    );
  }

  update(wine) {
    return this.database.query(
      `update ${this.table} set name = ? grape_variety = ? where id = ?`,
      [wine.name, wine.grape_variety, wine.id]
    );
  }
}

module.exports = WineManager;
