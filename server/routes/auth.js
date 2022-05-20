const express = require("express");
const router = express.Router();

// Import the controllers
const { signup, login } = require("../controllers/auth.js");
 
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;