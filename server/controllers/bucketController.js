const Bucket = require('../models/Bucket');

// ➕ Create bucket
exports.createBucket = async (req, res) => {
  try {

    const bucket = await Bucket.create({
      name: req.body.name,
      owner: req.user,
      members: [req.user]
    });

    res.status(201).json(bucket);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📦 Get my buckets
exports.getBuckets = async (req, res) => {
  try {
    const buckets = await Bucket.find({
      members: req.user
    });

    res.json(buckets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};