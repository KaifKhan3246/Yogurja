const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// ✅ POST: Save contact form
router.post("/", async (req, res) => {
  try {
    console.log("📩 Incoming Data:", req.body);

    const contact = new Contact(req.body);
    await contact.save();

    return res.json({ success: true });
  } catch (error) {
    console.error("❌ Contact Save Error:", error);
    return res.json({ success: false });
  }
});

// ✅ GET: Fetch all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ date: -1 });
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch contacts" });
  }
});

module.exports = router;
