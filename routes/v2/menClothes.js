const express = require("express");
const clothes = require("../../data/menClothes.json");

const router = express.Router();

// Base URL for images
const BASE_URL = "https://my-own-api-3gym.onrender.com";

// GET all clothes with optional filters
router.get("/", (req, res) => {
  let result = clothes.map(c => ({
    ...c,
    image: `${BASE_URL}${c.image}` // prepend full URL for images
  }));

  const { category, color, name, search } = req.query;

  // Search by keyword in name or category
  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      c =>
        c.name.toLowerCase().includes(keyword) ||
        c.category.toLowerCase().includes(keyword)
    );
  }

  // Filter by category
  if (category) {
    result = result.filter(
      c => c.category.toLowerCase() === category.toLowerCase()
    );
  }

  // Filter by color
  if (color) {
    result = result.filter(
      c => c.color.toLowerCase() === color.toLowerCase()
    );
  }

  // Filter by exact name
  if (name) {
    result = result.filter(
      c => c.name.toLowerCase() === name.toLowerCase()
    );
  }

  res.json(result); // Array response
});

// GET single item by ID
router.get("/:id", (req, res) => {
  const item = clothes.find(c => c.id === parseInt(req.params.id));
  if (!item) return res.status(404).json({ message: "Product not found" });

  // Full image URL
  const fullItem = { ...item, image: `${BASE_URL}${item.image}` };
  res.json(fullItem);
});

module.exports = router;