// src/screens/BucketDetail.js
import { useEffect, useState } from 'react';
import API from '../api/axios';
import GlassyButton from '../components/GlassyButton';


function BucketDetail({ bucketId }) {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [randomItem, setRandomItem] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch items for the selected bucket
  const fetchItems = async () => {
    if (!bucketId) return;
    setLoading(true);
    setItems([]); // clear old items immediately
    console.log('Fetching items for bucketId:', bucketId);
    try {
      const res = await API.get('/items', { params: { bucketId } });
      await new Promise((resolve) => setTimeout(resolve, 500));
      setItems(res.data);
    } catch (err) {
      console.error('Fetch items error:', err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRandomItem(null); // reset random item when bucket changes
    fetchItems();
  }, [bucketId]);

  // Add new item
  const handleAdd = async () => {
    if (!newItem) return;
    try {
      await API.post('/items', { bucketId, name: newItem });
      setNewItem('');
      fetchItems();
    } catch (err) {
      console.error('Add item failed:', err.response?.data || err.message);
      alert('Failed to add item');
    }
  };

  // Pick random item
  const handleRandom = async () => {
    try {
      const res = await API.get('/items/random', { params: { bucketId } });
      setRandomItem(res.data);
    } catch (err) {
      console.error('Random pick failed:', err.response?.data || err.message);
      alert('Failed to pick random item');
    }
  };

  // Skeleton loader component
  const SkeletonItem = () => (
    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
  );

  return (
    <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">Bucket Items</h2>

        {/* Add new item */}
        <div className="flex gap-2 mb-4">
            <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="New item..."
            className="flex-1 p-2 border rounded"
            />
            <GlassyButton onClick={handleAdd} color="blue">
            Add
            </GlassyButton>
        </div>

        {/* Random picker */}
        <div className="mb-4">
            <GlassyButton onClick={handleRandom} color="green">
            Pick Random Item
            </GlassyButton>
            {randomItem && (
            <p className="mt-2 p-2 bg-yellow-200 rounded">🎲 {randomItem.name}</p>
            )}
        </div>

        {/* Scrollable items list */}
        <div className="max-h-[60vh] overflow-hidden hover:overflow-y-auto transition-all duration-300">
            {loading ? (
            <ul className="space-y-2">
                {Array(5).fill(0).map((_, idx) => (
                <li key={idx}>
                    <div className="h-12 bg-gray-300 rounded animate-pulse"></div>
                </li>
                ))}
            </ul>
            ) : (
            <ul className="space-y-2">
                {items.length === 0 ? (
                <p className="text-gray-500">No items in this bucket yet</p>
                ) : (
                items.map((item) => (
                    <li key={item._id} className="p-3 rounded shadow flex justify-between">
                    {item.name}
                    {item.done && <span className="text-green-500 font-bold">✓</span>}
                    </li>
                ))
                )}
            </ul>
            )}
        </div>
        </div>
  );
}

export default BucketDetail;