console.log("MEN CLOTHES ROUTE LOADED");

const express = require("express");
const clothes = require("../../data/menClothes.json");

const router = express.Router();

/* GET all clothes */
router.get("/", (req, res) => {
  let result = [...clothes];
  const { category, color, search } = req.query;

  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      item =>
        item.name.toLowerCase().includes(keyword) ||
        item.category.toLowerCase().includes(keyword)
    );
  }

  if (category) {
    result = result.filter(
      item => item.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (color) {
    result = result.filter(
      item => item.color.toLowerCase() === color.toLowerCase()
    );
  }

  res.json(result);
});

/* GET single product */
router.get("/:id", (req, res) => {
  const item = clothes.find(c => c.id === parseInt(req.params.id));
  if (!item) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(item);
});

module.exports = router;