exports.seed = function(knex, Promise) {
  return knex("roles").insert([
    { name: "Instructor" },
    { name: "PM" },
    { name: "Student" }
  ]);
};
