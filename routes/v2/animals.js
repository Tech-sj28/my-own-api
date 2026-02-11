const express = require("express");
const animals = require("../../data/animals.json");

const router = express.Router();

/* GET animals - ARRAY ONLY (v2) */
router.get("/", (req, res) => {
  let result = [...animals];
  const { type, habitat, search } = req.query;

  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      a =>
        a.name.toLowerCase().includes(keyword) ||
        a.type.toLowerCase().includes(keyword) ||
        a.habitat.toLowerCase().includes(keyword)
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

  res.json(result); // ✅ ARRAY ONLY
});

/* GET single animal */
router.get("/:id", (req, res) => {
  const animal = animals.find(a => a.id === parseInt(req.params.id));

  if (!animal) {
    return res.status(404).json({ message: "Animal not found" });
  }

  res.json(animal); // ✅ object only
});

module.exports = router;
