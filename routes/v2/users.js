const express = require("express");
const users = require("../../data/users.json");

const router = express.Router();

// GET users - ARRAY ONLY (v2)
router.get("/", (req, res) => {
  let result = [...users];
  const { name, email, search } = req.query;

  // Search by name or email
  if (search) {
    const keyword = search.toLowerCase();
    result = result.filter(
      u =>
        u.name.toLowerCase().includes(keyword) ||
        u.email.toLowerCase().includes(keyword)
    );
  }

  // Filter by exact name
  if (name) {
    result = result.filter(
      u => u.name.toLowerCase() === name.toLowerCase()
    );
  }

  // Filter by exact email
  if (email) {
    result = result.filter(
      u => u.email.toLowerCase() === email.toLowerCase()
    );
  }

  res.json(result); // Return ARRAY only
});

/* GET single fruit */
router.get("/:id", (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "users not found" });
  }
  res.json(user); // 👈 object only
});

module.exports = router;
