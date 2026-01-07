const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const contactRoute = require("./routes/contactRoute");

const app = express();

// Middleware 
app.use(cors());
app.use(express.json());

//  Routes
app.use("/api/contact", contactRoute);

//  MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/contactDB")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
