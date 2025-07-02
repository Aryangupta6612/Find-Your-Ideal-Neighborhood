const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const matchRoute = require("./routes/match");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", matchRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on http://localhost:${PORT}`));
