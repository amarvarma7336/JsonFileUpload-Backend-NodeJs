const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://localhost:8080",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const router = require("./src/routes/index");
app.use("/", router);

app.get("/", (req, res) => {
  res.json({ message: "Backend app is running" });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Backend app is running on port ${PORT}`);
});
