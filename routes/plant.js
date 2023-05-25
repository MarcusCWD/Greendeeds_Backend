const express = require("express");
const router = express.Router();

const Plant = require('../models/plant');
const { pagination } = require("../functions/pagination");


router.get("/all", async (req, res) => {
    try {
      let pageDetails = await pagination(req.query.page, req.query.limit)
      const paginatedQuery = await Plant.getAllPlants(pageDetails[0], pageDetails[1])

      res.json(paginatedQuery);
    } catch (error) {
      res.status(500).json(error.toString());
    }
})

router.get("/byId", async (req, res) => {
  try {
    const plantId = req.query.id
    const plant = await Plant.getPlantById(plantId);
    res.json(plant);
  } catch (error) {
    res.status(500).json(error.toString());
  }
})


module.exports = router

