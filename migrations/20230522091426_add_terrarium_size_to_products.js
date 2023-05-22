/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('products', function(table) {
        table.integer('terrarium_id').unsigned().references('id').inTable('terrariums');
        table.integer('size_id').unsigned().references('id').inTable('sizes');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('products', function(table) {
        table.dropForeign('terrarium_id');
        table.dropColumn('terrarium_id');
        table.dropForeign('size_id');
        table.dropColumn('size_id');
    });
};
