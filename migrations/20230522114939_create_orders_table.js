/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('orders', function (table) {
        table.increments('id').primary();
        table.dateTime('orderdate').notNullable();
        table.decimal('totalprice', 4, 2).notNullable();
        table.string('address', 300).notNullable();
        table.string('contact', 30).notNullable();
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('orders');
};
