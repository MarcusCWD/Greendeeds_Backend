const express = require("express");
const router = express.Router();

const Terrarium = require('../models/terrarium');
const { pagination } = require("../functions/pagination");


router.get("/all", async (req, res) => {
    try {
      let pageDetails = await pagination(req.query.page, req.query.limit)
      const paginatedQuery = await Terrarium.getAllTerrariums(pageDetails[0], pageDetails[1])

      res.json(paginatedQuery);
    } catch (error) {
      res.status(500).json(error.toString());
    }
})

router.get("/byId", async (req, res) => {
  try {
    const terrariumId = req.query.id
    const terrarium = await Terrarium.getTerrariumById(terrariumId);
    res.json(terrarium);
  } catch (error) {
    res.status(500).json(error.toString());
  }
})

// possible that return multiple objects. But no need for pagination (expected only at most < 5 obj)
router.get("/byIdWithProduct", async (req, res) => {
  try {
    const terrariumId = req.query.id
    const terrarium = await Terrarium.getTerrariumByIdWithProduct(terrariumId);
    res.json(terrarium);
  } catch (error) {
    res.status(500).json(error.toString());
  }
})

router.get("/BasePrice", async (req, res) => {
  try {
    let pageDetails = await pagination(req.query.page, req.query.limit)
    const paginatedQuery = await Terrarium.getAllTerrariumsWithBasePrice(pageDetails[0], pageDetails[1])

    res.json(paginatedQuery);
  } catch (error) {
    res.status(500).json(error.toString());
  }
})


module.exports = router

