# 🧠 Problem Solving

## 🔍 Problem Definition

People struggle to find neighborhoods matching their preferences due to:
- Scattered data
- No centralized, personalized tools
- Generic search results

## 🎯 Objective

Build a system that matches neighborhoods based on:
- Rent limit
- Safety requirement
- Noise tolerance
- Amenities desired

---

## 🧪 Hypothesis

1. Most users care about **budget** and **safety**
2. Amenities like **parks** or **metro** increase interest
3. Users can tolerate some noise if amenities are ideal

---

## ⚙️ Algorithm Design

1. Parse real data from `neighborhoods.json`
2. For each neighborhood:
   - Score based on criteria match
   - Apply weights (e.g., safety > noise)
3. Return top 3 matches with highest scores

---

## 📊 Data Processing

Used:
- [U.S. Census ACS API](https://api.census.gov/data/2022/acs/acs5)
- ZIP-based rent data
- Manually appended: safety, noise, amenities

---

## 🧩 Integration Challenges

- Census API returns CSV-like array → parsed into JSON
- Different ZIP codes return missing data → handled with fallback
- Frontend form input must be validated → added input filters

