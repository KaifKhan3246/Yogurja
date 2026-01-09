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

//  MongoDB connection (with options and better logging)
const mongoUri =
  "mongodb+srv://kaif:kaif3246@cluster1.qcbiwe4.mongodb.net/contactdatabase?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose
  .connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "contactdatabase",
  })
  .then(() => console.log("✅ MongoDB Connected to contactdatabase"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

mongoose.connection.on("connected", () =>
  console.log("🔗 Mongoose event: connected")
);
mongoose.connection.on("error", (err) =>
  console.error("⚠️ Mongoose event: error", err)
);
mongoose.connection.on("disconnected", () =>
  console.log("🔌 Mongoose event: disconnected")
);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
