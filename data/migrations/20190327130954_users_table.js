//new changes to make
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(tbl) {
    //primary key, called id and make auto increment id by default, can pass another name
    tbl.increments();

    //name field - first is name of field, second is size - notnullable is require
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    //tbl.unique('name') alternative

    // foreign key
    tbl
      .integer("role_id") //column name and type
      .unsigned()
      .references("id") //references id field
      .inTable("roles") //in roles table
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

//how to undo the changes that are made
exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
