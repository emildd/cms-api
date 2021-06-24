const { default: knex } = require("knex");

exports.up = async function(knex) {
    await knex.schema.createTable('users',function(table){
        table.bigIncrements('id').primary();
        table.string('username').notNullable().unique();
        table.string('password').nullable();
        table.string('email').notNullable().unique();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('users');
};
