const express = require("express");
const countries = require("../data/countries.json");

const router = express.Router();

/* GET countries (v1) */
router.get("/", (req, res) => {
  let result = [...countries];
  const { continent, code, search, page = 1, limit = 50 } = req.query;

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

/* GET single country */
router.get("/:id", (req, res) => {
  const country = countries.find(c => c.id === parseInt(req.params.id));
  if (!country) {
    return res.status(404).json({ message: "Country not found" });
  }
  res.json({ version: "v1", data: country });
});

module.exports = router;
