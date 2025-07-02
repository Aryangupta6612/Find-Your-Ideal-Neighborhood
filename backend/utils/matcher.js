function matchNeighborhoods(userPrefs, neighborhoods) {
  const matches = neighborhoods.map(nb => {
    let score = 0;

    if (nb.rent <= userPrefs.max_rent) score++;
    if (nb.safety >= userPrefs.min_safety) score++;
    if (nb.noise_level <= userPrefs.max_noise) score++;

    if (userPrefs.amenities.every(a => nb.amenities.includes(a))) score++;

    return { name: nb.name, score , rent: nb.rent, safety: nb.safety,noise_level: nb.noise_level, amenities: nb.amenities };
  });

  return matches.sort((a, b) => b.score - a.score).slice(0, 3);
}

module.exports = { matchNeighborhoods };
