const express = require('express');
const router = express.Router();

const {createBucket,getBuckets} = require('../controllers/bucketController');
const authMiddleware = require('../middleware/authMiddleware');
const itemRoutes = require('./itemRoutes');

// protected routes
router.post('/', authMiddleware, createBucket);
router.get('/', authMiddleware, getBuckets);
router.use('/:bucketId/items', itemRoutes);

module.exports = router;