require("dotenv").config();
const knex = require('knex')(require('../knexfile')[process.env.ENV_SELECTION]);

module.exports = {
  async getAllTerrariums(limit, offset) {
    return knex('terrariums')
    .select('*')
    .orderBy('terrariums.id')
    .offset(offset)
    .limit(limit);
  },

  async getTerrariumById(id) {
    return knex('terrariums').where({ id }).first().then((rows) => {
      if (rows) {
        return rows
      }
      else{
        throw new Error('Terrarium not found');
      }
    })
  },

  // add in the query logic for get all with base price
  async getAllTerrariumsWithBasePrice(limit, offset) {

    return knex('terrariums')
      .select('terrariums.id', 'terrariums.name', 'terrariums.description', knex.raw('MIN(products.price) AS lowest_price'))
      .join('products', 'terrariums.id', 'products.terrarium_id')
      .where('products.active', 1)
      .groupBy('terrariums.id')
      .orderBy('terrariums.id')
      .offset(offset)
      .limit(limit);
  },
  async createTerrarium(terrarium) {
    return knex('terrariums').insert(terrarium).returning('*');
  },

  async updateTerrarium(id, updates) {
    return knex('terrariums').where({ id }).update(updates).returning('*');
  },

  async deleteTerrarium(id) {
    return knex('terrariums').where({ id }).del();
  },
};