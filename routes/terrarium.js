const express = require("express");
const router = express.Router();

const Terrarium = require('../models/terrarium');


router.get("/all", async (req, res) => {
    try {
        const terrariums = await Terrarium.getAllTerrariums();
        res.json(terrariums);
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

router.get("/basePrice", async (req, res) => {
  try {
    const terrariums = await Terrarium.getAllTerrariumsWithBasePrice();
    res.json(terrariums);
  } catch (error) {
    res.status(500).json(error.toString());
  }
})


module.exports = router

