// Imports
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Initialization
const app = express();
const PORT = process.env.PORT || 5000;

// Enable cors
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Server Started");
});

// App Listening
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
