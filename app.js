const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Route mặc định
app.get("/", (req, res) => {
  res.json({ message: "Welcome to contact book application." });
});

// Register contact routes
const contactRoutes = require("./app/routes/contact.route");
app.use("/api/contacts", contactRoutes);

module.exports = app;
