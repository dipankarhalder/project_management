const express = require('express');

const authRoutes = require('../controllers/auth');
const profileRoutes = require('../controllers/profile');
const companyRoutes = require('../controllers/company');

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/profile', profileRoutes);
router.use('/company', companyRoutes);

module.exports = router;
