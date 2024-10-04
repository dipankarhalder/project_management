const express = require('express');

const authRoutes = require('../controllers/auth');

const router = express.Router();

router.use('/auth', authRoutes);

module.exports = router;
