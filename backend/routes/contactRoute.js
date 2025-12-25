const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// SAVE MESSAGE (already used)
router.post("/", async(req, res) => {
    try {
        const newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number,
            company: req.body.company,
            message: req.body.message,
        });

        await newContact.save();
        res.status(201).json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

// 👉 GET ALL MESSAGES (ADMIN)
router.get("/", async(req, res) => {
    try {
        const messages = await Contact.find().sort({ date: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ msg: "Error" });
    }
});

module.exports = router;