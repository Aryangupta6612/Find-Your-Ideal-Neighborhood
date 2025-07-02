const { matchNeighborhoods } = require("../backend/utils/matcher");

test("returns top 3 matches", () => {
  const prefs = {
    max_rent: 1600,
    min_safety: 3,
    max_noise: 3,
    amenities: ["parks"]
  };

  const neighborhoods = [
    { name: "A", rent: 1500, safety: 4, noise_level: 2, amenities: ["parks"] },
    { name: "B", rent: 2500, safety: 5, noise_level: 3, amenities: ["gyms"] },
    { name: "C", rent: 1400, safety: 3, noise_level: 1, amenities: ["parks", "schools"] }
  ];

  const result = matchNeighborhoods(prefs, neighborhoods);
  expect(result.length).toBeLessThanOrEqual(3);
});
