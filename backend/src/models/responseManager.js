const AbstractManager = require("./AbstractManager");

class ResponseManager extends AbstractManager {
  constructor() {
    super({ table: "response" });
  }

  find(id) {
    return this.database.query(`select * from  ${this.table} where id = ?`, [
      id,
    ]);
  }

  findAllByUser(id) {
    return this.database.query(
      `select option_id , option_name from  ${this.table} join options on options.id = option_id where user_id  = ?`,
      [id]
    );
  }

  insert(response) {
    return this.database.query(
      `insert into ${this.table} (option_id , user_id, wine_id) values (?, ?, ?)`,
      [response.option_id, response.user_id, response.wine_id]
    );
  }

  update(response) {
    return this.database.query(
      `update ${this.table} set option_id = ?, question_id = ?,  where id = ?`,
      [response.option_id, response.question_id, response.id]
    );
  }
}

module.exports = ResponseManager;
