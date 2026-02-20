const express = require("express");
const cors = require("cors");
const fruitsRoutes = require("./routes/fruits");
const animalsRoutes = require("./routes/animals");
const fruitsV2Routes = require("./routes/v2/fruits");
const animalsV2Routes = require("./routes/v2/animals");
const countriesRoutes = require("./routes/countries");
const countriesV2Routes = require("./routes/v2/countries");
const path = require("path");
const menClothesRouter = require("./routes/v2/menClothes");



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

// app.get("/", (req, res) => {
//   res.json({
//     name: "My Own Public API",
//     description: "Free public REST API for learning and testing frontend & backend projects",
//     baseUrl: "https://my-own-api-3gym.onrender.com",

//     Links: {
//       use:"React,js users should follow this links",
//       fruits:"https://my-own-api-3gym.onrender.com/api/v2/fruits",
//       animals:"https://my-own-api-3gym.onrender.com/api/v2/animals",
//       countries:"https://my-own-api-3gym.onrender.com/api/v2/countries"
//     },
 
//     links: {
//       use:"Real-world production applications that need pagination, filtering, scalability, and structured responses",
//       fruits:"https://my-own-api-3gym.onrender.com/api/v1/fruits",
//       animals:"https://my-own-api-3gym.onrender.com/api/v1/animals",
//       countries:"https://my-own-api-3gym.onrender.com/api/v1/countries"
//     },
//     versions: {


//       v2: {
//         purpose: "Frontend-friendly array responses (JSONPlaceholder style)",
//         format: "Array",
//         endpoints: {
//           fruits: "/api/v2/fruits",
//           animals: "/api/v2/animals",
//           countries: "/api/v2/countries"
//         }
//       }
//     },
    
//     v1: {
//         purpose: "Structured responses with metadata (pagination, total count)",
//         format: "Object",
//         endpoints: {
//           fruits: "/api/v1/fruits",
//           animals: "/api/v1/animals",
//           countries: "/api/v1/countries"
//         }
//       },



//     author: "Suraj Pagi",
//     status: "Live 🚀"
//   });
// });

 
// redirect old routes

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
