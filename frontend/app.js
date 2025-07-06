const form = document.getElementById("form");
const rentInput = document.getElementById("rent");
const safetyInput = document.getElementById("safety");
const noiseInput = document.getElementById("noise");
const amenitiesInput = document.getElementById("amenities");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const rent = rentInput.value;
  const safety = safetyInput.value;
  const noise = noiseInput.value;
  const amenities = amenitiesInput.value
    .split(",")
    .map((a) => a.trim().toLowerCase())
    .filter((a) => a);

  const body = {
    max_rent: Number(rent),
    min_safety: Number(safety),
    max_noise: Number(noise),
    amenities: amenities,
  };

  try {
    const res = await fetch("https://find-your-ideal-neighborhood.onrender.com/api/match", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const text = await res.text();
    console.log("Raw response text:", text);

    const matches = JSON.parse(text);
    console.log("Parsed matches:", matches);

    resultsDiv.innerHTML = "";

    if (matches.length === 0) {
      resultsDiv.innerHTML = `<div class="result">No matching neighborhoods found.</div>`;
    } else {
      matches.forEach((n) => {
        const rent = n.rent !== undefined ? `$${n.rent}` : "Not available";
        const safety = n.safety !== undefined ? n.safety : "Not available";
        const noise = n.noise_level !== undefined ? n.noise_level : "Not available";
        const amenities = (n.amenities || []).join(", ") || "None";

        const el = document.createElement("div");
        el.className = "result";
        el.innerHTML = `
          <strong>${n.name}</strong> (Score: ${n.score})<br>
          <ul>
            <li><strong>Rent:</strong> ${rent}</li>
            <li><strong>Safety:</strong> ${safety}</li>
            <li><strong>Noise:</strong> ${noise}</li>
            <li><strong>Amenities:</strong> ${amenities}</li>
          </ul>
        `;
        resultsDiv.appendChild(el);
      });
    }
  } catch (err) {
    console.error("Parsing or network error:", err);
    alert("⚠️ Server error. Check console for logs.");
  }
});
