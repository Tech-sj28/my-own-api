const express = require("express");
const fruits = require("../../data/fruits.json");

const router = express.Router();

/* GET fruits - ARRAY ONLY (v2) */
router.get("/", (req, res) => {
  let result = [...fruits];
  const { color, name, search } = req.query;

  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      f =>
        f.name.toLowerCase().includes(keyword) ||
        f.color.toLowerCase().includes(keyword)
    );
  }

  if (color) {
    result = result.filter(
      f => f.color.toLowerCase() === color.toLowerCase()
    );
  }

  if (name) {
    result = result.filter(
      f => f.name.toLowerCase() === name.toLowerCase()
    );
  }

  res.json(result); // 👈 ARRAY ONLY
});

/* GET single fruit */
router.get("/:id", (req, res) => {
  const fruit = fruits.find(f => f.id === parseInt(req.params.id));
  if (!fruit) {
    return res.status(404).json({ message: "Fruit not found" });
  }
  res.json(fruit); // 👈 object only
});

module.exports = router;
