const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Basic test route
app.get("/", (req, res) => {
  res.json({ message: "Hello from Node backend!" });
});

// A second example route
app.get("/api/greet", (req, res) => {
  res.json({ greeting: "Hi from your Express APP 👋" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
