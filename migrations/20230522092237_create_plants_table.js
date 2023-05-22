/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('plants', function (table) {
        table.increments('id').primary();
        table.string('name', 50).notNullable();
        table.text('description', 255).notNullable();
        table.decimal('price', 4, 2).notNullable();
        table.boolean('active').notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('plants');
};
