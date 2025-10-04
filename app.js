const express = require("express");
const cors = require("cors");

// import class ApiError tự định nghĩa
const ApiError = require("./app/api-error");

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

// Middleware xử lý lỗi 404
app.use((req, res, next) => {
  return next(new ApiError(404, "Resource not found"));
});

// Middleware xử lý lloix tập trung
app.use((err, req, res, next) => {
  return res.status(err.statusCode || 500).json({
    message: err.message || "Internal Server Error",
  });
});

module.exports = app;
