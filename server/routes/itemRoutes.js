const express = require('express');
const router = express.Router();
const { addItem, getItems, randomItem } = require('../controllers/itemController');
const authMiddleware = require('../middleware/authMiddleware');

// Apply auth middleware to all routes in this router
router.use(authMiddleware);

// Routes
router.get('/', getItems);            // GET /items?bucketId=<id>
router.post('/', addItem);            // POST /items  { bucketId, name }
router.get('/random', randomItem);    // GET /items/random?bucketId=<id>

module.exports = router;