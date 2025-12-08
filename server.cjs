// server.cjs
const express = require("express");
const cors = require("cors");

const app = express();

// Allow CORS for all origins (for testing)
app.use(cors());
app.use(express.json());

// Mock user
const USER = {
  email: "test@netflix.com",
  password: "123456"
};

app.post("/login", (req, res) => {
  console.log("POST /login received:", req.body);
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (email === USER.email && password === USER.password) {
    return res.json({ message: "Login successful" });
  }

  return res.status(401).json({ message: "Invalid email or password" });
});

// Start server
app.listen(4000, () => {
  console.log("Backend running on port 4000");
});
