const express = require("express");
const cors = require("cors");
const path = require("path");
const fruitsRoutes = require("./routes/fruits");
const animalsRoutes = require("./routes/animals");
const fruitsV2Routes = require("./routes/v2/fruits");
const animalsV2Routes = require("./routes/v2/animals");
const countriesRoutes = require("./routes/countries");
const countriesV2Routes = require("./routes/v2/countries");
const menClothesRouter = require("./routes/v2/menClothes");
const usersRouter = require("./routes/v2/users");


const app = express();
const PORT = process.env.PORT || 3000;

app.use("/images", express.static("public/images"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use("/api/v2/fruits", fruitsV2Routes);
app.use("/api/v2/animals", animalsV2Routes);
app.use("/api/v1/countries", countriesRoutes);
app.use("/api/v2/countries", countriesV2Routes);
app.use("/api/v2/men-clothes", menClothesRouter);
app.use("/api/v2/users", usersRouter);



 
app.get("/api/fruits", (req, res) => res.redirect("/api/v1/fruits"));
app.get("/api/animals", (req, res) => res.redirect("/api/v1/animals"));


// versioned routes
app.use("/api/v1/fruits", fruitsRoutes);
app.use("/api/v1/animals", animalsRoutes);

 


app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "My Own Public API",
    time: new Date()
  });
});


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
