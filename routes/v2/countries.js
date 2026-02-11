const express = require("express");
const countries = require("../../data/countries.json");

const router = express.Router();

/* GET countries (v2) */
router.get("/", (req, res) => {
  let result = [...countries];
  const { continent, code, search } = req.query;

  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      c =>
        c.name.toLowerCase().includes(keyword) ||
        c.capital.toLowerCase().includes(keyword)
    );
  }

  if (continent) {
    result = result.filter(
      c => c.continent.toLowerCase() === continent.toLowerCase()
    );
  }

  if (code) {
    result = result.filter(
      c => c.code.toLowerCase() === code.toLowerCase()
    );
  }

  res.json(result); // ✅ ARRAY ONLY
});

/* GET single country */
router.get("/:id", (req, res) => {
  const country = countries.find(c => c.id === parseInt(req.params.id));
  if (!country) {
    return res.status(404).json({ message: "Country not found" });
  }
  res.json(country);
});

module.exports = router;
