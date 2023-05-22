/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('orders', function(table) {
        table.integer('orderstatus_id').unsigned().references('id').inTable('orderstatuses');
        table.integer('user_id').unsigned().references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('orders', function(table) {
        table.dropForeign('orderstatus_id');
        table.dropColumn('orderstatus_id');
        table.dropForeign('user_id');
        table.dropColumn('user_id');
    });
};
