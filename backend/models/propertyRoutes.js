const express = require('express');
const { getProperties, addProperty } = require('../controllers/propertyController');
const router = express.Router();

router.get('/', getProperties);
router.post('/', addProperty); // Use a middleware for authentication here

module.exports = router;