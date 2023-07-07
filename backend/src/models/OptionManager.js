const AbstractManager = require("./AbstractManager");

class OptionManager extends AbstractManager {
  constructor() {
    super({ table: "options" });
  }

  findAll() {
    return this.database.query(`
        SELECT o.id, o.option_name, q.title AS question_title, c.name AS category_name
        FROM options o
        INNER JOIN question q ON o.question_id = q.id
        INNER JOIN category c ON q.category_id = c.id
    `);
  }

  insert(option) {
    return this.database.query(
      `insert into ${this.table} (option_name, questions_id, category) values (?, ?, ?)`,
      [option.option_name, option.questions_id, option.category]
    );
  }

  update(option) {
    return this.database.query(
      `update ${this.table} set option_name = ?, questions_id = ?, category = ? where id = ?`,
      [option.name, option.questions_id, option.category, option.id]
    );
  }
}

module.exports = OptionManager;
