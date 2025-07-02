const express = require("express");
const { matchNeighborhoods } = require("../utils/matcher");
const fs = require("fs");
const path = require("path");

const router = express.Router();

router.post("/match", (req, res) => {
  try {
    console.log("✅ Received /api/match POST request");
    const userPrefs = req.body;

    // Validate required fields
    if (
      !userPrefs ||
      typeof userPrefs.max_rent !== "number" ||
      typeof userPrefs.min_safety !== "number" ||
      typeof userPrefs.max_noise !== "number" ||
      !Array.isArray(userPrefs.amenities)
    ) {
      return res.status(400).json({ error: "Invalid input data format" });
    }

    const dataPath = path.join(__dirname, "../data/neighborhoods.json");

    if (!fs.existsSync(dataPath)) {
      console.error("❌ neighborhoods.json not found");
      return res.status(500).json({ error: "Neighborhood data not found" });
    }

    const data = fs.readFileSync(dataPath);
    const neighborhoods = JSON.parse(data);

    const results = matchNeighborhoods(userPrefs, neighborhoods);
    console.log(`✅ Returning ${results.length} matched results`);

    res.json(results);
  } catch (err) {
    console.error("❌ Error in /api/match:", err.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
