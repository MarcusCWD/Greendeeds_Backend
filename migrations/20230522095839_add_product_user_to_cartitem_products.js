/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('cartitem_products', function(table) {
        table.integer('product_id').unsigned().references('id').inTable('products');
        table.integer('user_id').unsigned().references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('cartitem_products', function(table) {
        table.dropForeign('product_id');
        table.dropColumn('product_id');
        table.dropForeign('user_id');
        table.dropColumn('user_id');
    });
};
