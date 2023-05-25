const express = require("express");
const router = express.Router();

const Size = require('../models/size');
const { pagination } = require("../functions/pagination");


router.get("/all", async (req, res) => {
    try {
      let pageDetails = await pagination(req.query.page, req.query.limit)
      const paginatedQuery = await Size.getAllSizes(pageDetails[0], pageDetails[1])

      res.json(paginatedQuery);
    } catch (error) {
      res.status(500).json(error.toString());
    }
})

router.get("/byId", async (req, res) => {
  try {
    const sizeId = req.query.id
    const size = await Size.getSizeById(sizeId);
    res.json(size);
  } catch (error) {
    res.status(500).json(error.toString());
  }
})


module.exports = router

