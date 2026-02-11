const express = require("express");
const cors = require("cors");
const fruitsRoutes = require("./routes/fruits");
const animalsRoutes = require("./routes/animals");
const fruitsV2Routes = require("./routes/v2/fruits");
const animalsV2Routes = require("./routes/v2/animals");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/v2/fruits", fruitsV2Routes);
app.use("/api/v2/animals", animalsV2Routes);

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
