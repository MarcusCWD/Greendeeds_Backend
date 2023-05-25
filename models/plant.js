require("dotenv").config();
const knex = require('knex')(require('../knexfile')[process.env.ENV_SELECTION]);

module.exports = {
  async getAllPlants(limit, offset) {
    return knex('plants')
    .select('*')
    .orderBy('plants.id')
    .offset(offset)
    .limit(limit);
  },

  async getPlantById(id) {
    return knex('plants').where({ id }).first().then((rows) => {
      if (rows) {
        return rows
      }
      else{
        throw new Error('Plant not found');
      }
    })
  },

  async createPlant(plant) {
    return knex('plants').insert(plant).returning('*');
  },

  async updatePlant(id, updates) {
    return knex('plants').where({ id }).update(updates).returning('*');
  },

  async deletePlant(id) {
    return knex('plants').where({ id }).del();
  },
};