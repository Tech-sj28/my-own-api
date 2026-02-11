const express = require("express");
const fruits = require("../data/fruits.json");

const router = express.Router();

/* GET fruits with filter + search + pagination */
router.get("/", (req, res) => {
  let result = [...fruits];
  const { color, name, search, page = 1, limit = 100 } = req.query;

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

  const pageNum = parseInt(page);
  const limitNum = parseInt(limit);
  const start = (pageNum - 1) * limitNum;
  const end = pageNum * limitNum;

  res.json({
    version: "v1",
    totalItems: result.length,
    page: pageNum,
    limit: limitNum,
    data: result.slice(start, end)
  });
});

/* GET single fruit */
router.get("/:id", (req, res) => {
  const fruit = fruits.find(f => f.id === parseInt(req.params.id));
  if (!fruit) {
    return res.status(404).json({ message: "Fruit not found" });
  }
  res.json({ version: "v1", data: fruit });
});

/* FAKE write routes */
router.post("/", (req, res) => {
  res.status(201).json({
    message: "Fruit created (fake)",
    data: { id: 999, ...req.body }
  });
});

router.put("/:id", (req, res) => {
  res.json({
    message: "Fruit updated (fake)",
    data: { id: req.params.id, ...req.body }
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "Fruit deleted (fake)",
    id: req.params.id
  });
});

module.exports = router;
