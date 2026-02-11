const express = require("express");
const animals = require("../data/animals.json");

const router = express.Router();

/* GET animals with filter + search + pagination */
router.get("/", (req, res) => {
  let result = [...animals];
  const { type, habitat, search, page = 1, limit = 100 } = req.query;

  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      a =>
        a.name.toLowerCase().includes(keyword) ||
        a.type.toLowerCase().includes(keyword)
    );
  }

  if (type) {
    result = result.filter(
      a => a.type.toLowerCase() === type.toLowerCase()
    );
  }

  if (habitat) {
    result = result.filter(
      a => a.habitat.toLowerCase() === habitat.toLowerCase()
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

/* GET single animal */
router.get("/:id", (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));
  if (!animal) {
    return res.status(404).json({ message: "Animal not found" });
  }
  res.json({ version: "v1", data: animal });
});

/* FAKE write routes */
router.post("/", (req, res) => {
  res.status(201).json({
    message: "Animal created (fake)",
    data: { id: 999, ...req.body }
  });
});

router.put("/:id", (req, res) => {
  res.json({
    message: "Animal updated (fake)",
    data: { id: req.params.id, ...req.body }
  });
});

router.delete("/:id", (req, res) => {
  res.json({
    message: "Animal deleted (fake)",
    id: req.params.id
  });
});

module.exports = router;
