// Get items
exports.getItems = async (req, res) => {
  try {
    const { bucketId } = req.query; // <--- instead of req.params
    if (!bucketId) return res.status(400).json({ error: 'Bucket ID is required' });

    const items = await Item.find({ bucket: bucketId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Add item
const Item = require('../models/Item');
const Bucket = require('../models/Bucket');

exports.addItem = async (req, res) => {
  try {
    const { name, bucketId } = req.body;

    if (!bucketId || !name) {
      return res.status(400).json({ error: 'Missing bucketId or name' });
    }

    // Verify bucket exists
    const bucket = await Bucket.findById(bucketId);
    if (!bucket) return res.status(404).json({ error: 'Bucket not found' });

    // Optionally check if user is a member
    if (!bucket.members.includes(req.user._id)) {
      return res.status(403).json({ error: 'You are not a member of this bucket' });
    }

    const item = await Item.create({
      name,
      bucket: bucketId,
      createdBy: req.user._id
    });

    res.status(201).json(item);
  } catch (err) {
    console.error('addItem error:', err);
    res.status(500).json({ error: 'Server error' });
  }
};

// Random item
exports.randomItem = async (req, res) => {
  try {
    const { bucketId } = req.query; // from query
    if (!bucketId) return res.status(400).json({ error: 'Bucket ID required' });

    const items = await Item.find({ bucket: bucketId });
    if (!items.length) return res.status(404).json({ error: 'No items found' });

    const randomIndex = Math.floor(Math.random() * items.length);
    res.json(items[randomIndex]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};