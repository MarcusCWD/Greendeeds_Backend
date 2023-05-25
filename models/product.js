require("dotenv").config();
const knex = require('knex')(require('../knexfile')[process.env.ENV_SELECTION]);

module.exports = {
  async getAllProducts(limit, offset) {
    return knex('products')
    .select('*')
    .orderBy('products.id')
    .offset(offset)
    .limit(limit);
  },

  async getProductById(id) {
    return knex('products').where({ id }).first().then((rows) => {
      if (rows) {
        return rows
      }
      else{
        throw new Error('Product not found');
      }
    })
  },

  async createProduct(product) {
    return knex('products').insert(product).returning('*');
  },

  async updateProduct(id, updates) {
    return knex('products').where({ id }).update(updates).returning('*');
  },

  async deleteProduct(id) {
    return knex('products').where({ id }).del();
  },
}