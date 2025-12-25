const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb+srv://ayandavian07_db_user:lg6toUw3yEnSS6Xu@cluster0.7sgr9dp.mongodb.net/contactDB")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Routes
app.use("/api/contact", require("./routes/contactRoute"));

app.listen(5000, () => {
    console.log("Server running on port 5000");
});