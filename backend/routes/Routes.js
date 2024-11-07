const express = require("express");
const { postFormData, getAllFormData } = require("../controllers/FormData");
const { mailSender } = require("../controllers/mailSender");
const { contactForm } = require("../controllers/ContactForm");
const router = express.Router();


router.get('/', (req, res) => {
    res.send("Server is running successfully")
})
router.post("/postFormData", postFormData);
router.get("/getFormData", getAllFormData);
router.post("/sendMail", mailSender);
router.post("/contactUs", contactForm);

module.exports = router;