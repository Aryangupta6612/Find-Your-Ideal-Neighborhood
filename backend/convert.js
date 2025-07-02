const fs = require("fs");

const rawData = require("./rawData.json");

// skip header
const rows = rawData.slice(1);

const amenitiesPool = [
  "parks", "subway", "schools", "gyms", "libraries", "coffee shops",
  "restaurants", "bars", "malls", "bike lanes", "metro", "museums",
  "AC", "Cooler", "grocery stores", "music venues"
];

function getRandomAmenities() {
  const shuffled = amenitiesPool.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 3); // 3–5 items
}

const formatted = rows.map(([name, rentStr, zip]) => {
  return {
    name: zip,
    rent: parseInt(rentStr),
    safety: Math.floor(Math.random() * 3) + 3,         // 3–5
    noise_level: Math.floor(Math.random() * 3) + 2,    // 2–4
    amenities: getRandomAmenities()
  };
});

fs.writeFileSync("./data/neighborhoods.json", JSON.stringify(formatted, null, 2));
console.log("✅ Converted and saved to data/neighborhoods.json");
