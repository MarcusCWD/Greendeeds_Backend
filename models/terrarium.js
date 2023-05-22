require("dotenv").config();
const knex = require('knex')(require('../knexfile')[process.env.ENV_SELECTION]);

module.exports = {
  async getAllTerrariums() {
    return knex('terrariums').select('*');
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