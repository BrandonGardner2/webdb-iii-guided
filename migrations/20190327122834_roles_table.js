//new changes to make
exports.up = function(knex, Promise) {
  return knex.schema.createTable("roles", function(tbl) {
    //primary key, called id and make auto increment id by default, can pass another name
    tbl.increments();

    //name field - first is name of field, second is size - notnullable is require
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    //tbl.unique('name') alternative
  });
};

//how to undo the changes that are made
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("roles");
};
