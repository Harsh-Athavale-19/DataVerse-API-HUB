// Imports
const axios = require("axios");
const express = require("express");
const url = require("url");

// Initialization
const router = express.Router();

// Env vars
const API_BASE_URL = process.env.API_NEWS_BASE_URL;
const API_KEY_NAME = process.env.API_NEWS_KEY_NAME;
const API_KEY_VALUE = process.env.API_NEWS_KEY_VALUE;

// Routes
router.get("/", async (req, res) => {
  try {
    //   Fetching parameters from URL
    const params = new URLSearchParams({
      [API_KEY_NAME]: API_KEY_VALUE,
      ...url.parse(req.url, true).query,
    });

    //   Fetching data from API
    const responseData = await axios.get(`${API_BASE_URL}?${params}`);
    const apiData = responseData.data;

    // sending data
    res.send(apiData);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
