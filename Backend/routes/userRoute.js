const express = require("express");
const multer = require("multer");
// const { signup } = require("../controllers/userController");
// const {signin}=require("../controllers/userController");
// const {contactForm}=require("../controllers/userController");
// const{handleImageUpload}=require("../controllers/userController")
const userController = require("../controllers/userController");
const router = express.Router();
// router.route("/register").post(signup)
// router.route("/login").post(signin)
// router.route("/contact").post(contactForm)
// router.route("/compose").post(handleImageUpload)



// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Handle the image upload in the userController
// Define other routes for user registration, login, etc.
router.post("/register", userController.signup);
router.post("/login", userController.signin);
router.post("/contact", userController.contactForm);
router.post("/compose", upload.array("images", 5), userController.handleImageUpload);

module.exports = router;
