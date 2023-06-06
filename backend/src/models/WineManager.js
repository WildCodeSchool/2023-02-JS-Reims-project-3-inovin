const AbstractManager = require("./AbstractManager");

class WineManager extends AbstractManager {
  constructor() {
    super({ table: "wine" });
  }

  insert(wine) {
    return this.database.query(
      `insert into ${this.table} (grape_variety, AUTRE , AUTRE) values (?,?,?)`,
      [wine.grape_variety, wine.autre]
    );
  }

  update(wine) {
    return this.database.query(
      `update ${this.table} set grape_variety = ? , AUTRE = ? ,AUTRE = ? where id = ?`,
      [wine.grape_variety, wine.autre, wine.autre, wine.id]
    );
  }
}

module.exports = WineManager;
