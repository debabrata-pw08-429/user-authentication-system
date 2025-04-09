const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const validate = require("../middleware/validate");
const authValidation = require("../validations/auth.validation");

router.post("/signup", validate(authValidation.register), registerUser);
router.post("/login", validate(authValidation.login), loginUser);

module.exports = router;
