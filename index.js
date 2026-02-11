const express = require("express");

const fruitsRoutes = require("./routes/fruits");
const animalsRoutes = require("./routes/animals");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());

// root
app.get("/", (req, res) => {
  res.json({
    message: "Multi-API Server 🚀",
    version: "v1",
    apis: ["/api/v1/fruits", "/api/v1/animals"]
  });
});

// redirect old routes
app.get("/api/fruits", (req, res) => res.redirect("/api/v1/fruits"));
app.get("/api/animals", (req, res) => res.redirect("/api/v1/animals"));

// versioned routes
app.use("/api/v1/fruits", fruitsRoutes);
app.use("/api/v1/animals", animalsRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
