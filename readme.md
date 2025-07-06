# 🏘️ NeighborFit - Neighborhood-Lifestyle Matcher

NeighborFit is a full-stack web app that matches users with ideal neighborhoods based on their preferences such as budget, safety, noise, and desired amenities.

> 🔗 **Live App:** [NeighborFit on Vercel](https://find-your-ideal-neighborhood-e87roo5h4.vercel.app/)  
> 🖥️ **Backend API:** [API on Render](https://find-your-ideal-neighborhood.onrender.com/)  
> 📄 **📁 For detailed documentation, refer to the [`/docs`](./docs/) folder.**

---

## 💡 Project Overview

Finding a neighborhood that matches one’s lifestyle is often difficult due to scattered data and lack of personalization. This app solves the **neighborhood-lifestyle matching problem** using:

- 📊 Real-world data (U.S. Census API)
- 🔍 Algorithmic scoring
- ✅ Input preferences (rent, safety, noise, amenities)
- ⚙️ Full-stack architecture

---

## 🧪 Features

- Match neighborhoods by:
  - 💸 Max Rent
  - 🔐 Min Safety
  - 🔇 Max Noise Level
  - 🏞️ Desired Amenities
- Uses **real U.S. ZIP code data**
- Handles bad input & edge cases
- Fully deployed backend and frontend

---

## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | HTML, CSS, JavaScript    |
| Backend   | Node.js, Express         |
| Deployment| Vercel (frontend), Render (backend) |
| Data      | U.S. Census API + manual safety/noise/amenities |

---

## 🔍 Key Files

| File / Folder               | Description |
|----------------------------|-------------|
| `frontend/`                | Frontend form and styling |
| `backend/server.js`        | Express server entrypoint |
| `routes/match.js`          | Main API route for matching logic |
| `utils/matcher.js`         | Matching algorithm (scoring logic) |
| `data/neighborhoods.json`  | Processed real-world ZIP data |
| `data/rawdata.json`        | Unprocessed data from Census API |
| `docs/`                    | 📄 Detailed documentation (`Problem_Solving.md`, `Research.md`, `Reflection.md`) |

---

## ✅ Requirements Met

- [x] Problem defined & researched
- [x] Real-world data used
- [x] Working matching algorithm
- [x] Edge case handling
- [x] Functional app deployed
- [x] Clear documentation in `/docs`

---

## 👨‍💻 Author

**Aryan Gupta**  
Final Year B.Tech, LPU  
GitHub: [Aryangupta6612](https://github.com/Aryangupta6612)

---
