require("dotenv").config();
const knex = require('knex')(require('../knexfile')[process.env.ENV_SELECTION]);

module.exports = {
  async getAllSizes(limit, offset) {
    return knex('sizes')
    .select('*')
    .orderBy('sizes.id')
    .offset(offset)
    .limit(limit);
  },

  async getSizeById(id) {
    return knex('sizes').where({ id }).first().then((rows) => {
      if (rows) {
        return rows
      }
      else{
        throw new Error('Size not found');
      }
    })
  },

  async createSize(size) {
    return knex('sizes').insert(size).returning('*');
  },

  async updateSize(id, updates) {
    return knex('sizes').where({ id }).update(updates).returning('*');
  },

  async deleteSize(id) {
    return knex('sizes').where({ id }).del();
  },
};