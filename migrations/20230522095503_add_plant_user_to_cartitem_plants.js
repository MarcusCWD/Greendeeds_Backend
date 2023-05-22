/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('cartitem_plants', function(table) {
        table.integer('plant_id').unsigned().references('id').inTable('plants');
        table.integer('user_id').unsigned().references('id').inTable('users');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('cartitem_plants', function(table) {
        table.dropForeign('plant_id');
        table.dropColumn('plant_id');
        table.dropForeign('user_id');
        table.dropColumn('user_id');
    });
};
