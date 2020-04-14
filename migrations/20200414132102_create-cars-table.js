
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increment();
      tbl.text('car', 128)
      .unique()
      .notNullable();
      tbl.text('dealership');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
