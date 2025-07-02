// fetchCensusData.js
const fs = require("fs");
const axios = require("axios");

const apiKey = "2ab3128fe76c6471d9fee7c18ab18d3f8b6a1604";
const zipCodes = [
  "10001", "10002", "10003", "10011", "10025", "10453", "11201", "11226", "11368", "11434",
  "07030", "07305", "07666", "19104", "19120", "20001", "20011", "30301", "30318", "33101",
  "33125", "33614", "34209", "48075", "48197", "48219", "55411", "55416", "60601", "60608",
  "60614", "60647", "64118", "68104", "70119", "70124", "75001", "75006", "75201", "75217",
  "77001", "77084", "77494", "80202", "80205", "85004", "90001", "90011", "90026", "90210",
  "91331", "92101", "92105", "94016", "94536", "95014", "95823", "97206", "98101"
];

const baseURL = "https://api.census.gov/data/2022/acs/acs5";
const fields = "NAME,B25064_001E";

(async () => {
  const output = [["NAME", "B25064_001E", "zip code tabulation area"]];
  for (let zip of zipCodes) {
    const url = `${baseURL}?get=${fields}&for=zip%20code%20tabulation%20area:${zip}&key=${apiKey}`;
    try {
      const res = await axios.get(url);
      if (res.data.length > 1) {
        output.push(res.data[1]);
        console.log(`✅ Got data for ZIP: ${zip}`);
      } else {
        console.warn(`⚠️ No data for ZIP: ${zip}`);
      }
    } catch (err) {
      console.error(`❌ Error for ZIP: ${zip}`);
    }
    await new Promise(r => setTimeout(r, 500)); // Avoid rate limiting
  }

  fs.writeFileSync("rawData.json", JSON.stringify(output, null, 2));
  console.log("✅ rawData.json saved.");
})();
