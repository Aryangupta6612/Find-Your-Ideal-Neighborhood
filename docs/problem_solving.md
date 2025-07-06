# 🧠 Problem Solving - NeighborFit

---

## 🎯 Problem Statement

Finding the right neighborhood is a personal and complex decision. People care about affordability, safety, noise levels, and access to amenities like public transport or parks. However, most existing solutions (like real estate sites) don't let users filter neighborhoods based on **lifestyle-fit**.

NeighborFit solves this by matching users to neighborhoods based on **custom preferences**, using real-world ZIP code data, a scoring algorithm, and a clean full-stack implementation.

---

## 🧪 Hypotheses

1. Users want to filter by more than just rent — safety, noise, and amenities matter too.
2. Amenity-based scoring can personalize results significantly.
3. ZIP-level data is sufficient to demonstrate useful lifestyle-based matching.
4. Realistic matches can be generated with simple heuristics and scoring logic.

---

## 📊 Data Collection

We used:
- **U.S. Census API (ACS)** to pull median rent values by ZIP code.
- **Safety, noise, and amenities** were manually added to each ZIP entry to simulate extended data (due to API limitations).
- Data was stored in `neighborhoods.json`, processed from `rawdata.json`.

---

## ⚙️ Matching Algorithm

The core matching logic uses a **scoring system**. Each neighborhood is evaluated like this:

```js
score = 0;
if (rent <= max_rent) score += 1;
if (safety >= min_safety) score += 1;
if (noise <= max_noise) score += 1;
for (amenity in user_amenities):
    if (amenity in neighborhood.amenities): score += 1;
