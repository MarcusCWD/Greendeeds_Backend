const express = require("express");
const router = express.Router();

const Product = require('../models/product');
const { pagination } = require("../functions/pagination");


router.get("/all", async (req, res) => {
    try {
      let pageDetails = await pagination(req.query.page, req.query.limit)
      const paginatedQuery = await Product.getAllProducts(pageDetails[0], pageDetails[1])

      res.json(paginatedQuery);
    } catch (error) {
      res.status(500).json(error.toString());
    }
})

router.get("/byId", async (req, res) => {
  try {
    const productId = req.query.id
    const product = await Product.getProductById(productId);
    res.json(product);
  } catch (error) {
    res.status(500).json(error.toString());
  }
})

router.get("/allWithTerrarium", async (req, res) => {
    try {
      let pageDetails = await pagination(req.query.page, req.query.limit)
      const paginatedQuery = await Product.getAllProductsWithTerrarium(pageDetails[0], pageDetails[1])

      res.json(paginatedQuery);
    } catch (error) {
      res.status(500).json(error.toString());
    }
})


module.exports = router
