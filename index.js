// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const rateLimit = require("express-rate-limit");

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Enable cors
app.use(cors());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 Min
  max: 30, // 30 Requests
});

app.use(limiter);
app.set("trust proxy", 1);

// Routes
app.get("/", (req, res) => {
  res.send("Server Started");
});

app.use("/news", require("./routes/news")); //  News API

// App Listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
