# 🔍 Reflection

## ✅ What Worked Well

- Real data used (ZIP-wise rent)
- Clean backend structure with route separation
- Fast response with basic scoring algorithm

---

## ⚠️ Limitations

- Manually filled noise/safety data for demo ZIPs
- No live map or React frontend
- No DB (data read from file only)

---

## 🔮 Future Improvements

- Add MongoDB/Postgres to store neighborhoods
- Integrate map visualization (Google Maps, Leaflet)
- Real-time safety data (crime APIs)
- User account + save favorites
- Use weights in scoring formula (e.g., user preference for rent vs safety)

---

## 🔄 Trade-offs

| Option | Trade-Off |
|--------|-----------|
| Flat file vs DB | Flat = faster dev, DB = scalable |
| Static frontend | Easy to deploy, no interactivity |
| Manual data for safety | Fast for demo, not scalable |

---

## 📌 Scalability Notes

- Current backend supports any number of ZIPs
- File-based data is fine for demo, but DB needed for scale
- Caching frequently used ZIPs could help speed

