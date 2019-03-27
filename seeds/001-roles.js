exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("roles")
    .truncate() // Resets the primary key count and cleans the table
    .then(function() {
      // Inserts seed entries
      return knex("roles").insert([
        { name: "Instructor" },
        { name: "PM" },
        { name: "Student" }
      ]);
    });
};
