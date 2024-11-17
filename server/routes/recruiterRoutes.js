const express = require('express');
const { signupRecruiter } = require('../controllers/recruiterController');
const router = express.Router();

router.post('/signup', signupRecruiter);

module.exports = router;
