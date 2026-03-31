import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';
import BucketDetail from './BucketDetail';
import GlassyButton from '../components/GlassyButton';
import Navbar from '../components/Navbar';

function Dashboard() {
  const navigate = useNavigate();

  const [buckets, setBuckets] = useState([]);
  const [selectedBucket, setSelectedBucket] = useState(null);
  const [newBucket, setNewBucket] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchBuckets = async () => {
    try {
      setLoading(true);
      const res = await API.get('/buckets');
      setBuckets(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBuckets();
  }, []);

  const handleAddBucket = async () => {
    if (!newBucket) return;
    try {
      const res = await API.post('/buckets', { name: newBucket });
      setBuckets((prev) => [...prev, res.data]);
      setNewBucket('');
    } catch (err) {
      console.error('Failed to create bucket:', err.response?.data || err.message);
      alert('Failed to create bucket');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setBuckets([]);
    setSelectedBucket(null);
    navigate('/login');
  };

  if (loading) return <p className="p-6">Loading buckets...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <Navbar onLogout={handleLogout} />

      {/* Main content */}
      <div className="flex flex-col md:flex-row gap-6 p-6">
        
        {/* Bucket List - Main scroll */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <div className="bg-gray-200 p-4 rounded-xl shadow flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-2">My Buckets</h2>

            {/* Add new bucket */}
            <div className="flex gap-2 mb-2">
              <input
                value={newBucket}
                onChange={(e) => setNewBucket(e.target.value)}
                placeholder="New bucket..."
                className="flex-1 p-2 border rounded"
              />
              <GlassyButton onClick={handleAddBucket} color="blue">
                Add
              </GlassyButton>
            </div>

            {/* Bucket list - scrolls with page */}
            <ul className="space-y-2">
              {buckets.map((bucket) => (
                <li
                  key={bucket._id}
                  onClick={() => setSelectedBucket(bucket)}
                  className={`p-3 rounded shadow-md cursor-pointer transition-shadow duration-300 flex items-center gap-2
                    ${
                      selectedBucket?._id === bucket._id
                        ? 'bg-blue-100 shadow-lg border border-blue-400'
                        : 'bg-white shadow-md hover:shadow-2xl'
                    }`}
                >
                  {selectedBucket?._id === bucket._id && (
                    <span className="text-blue-600 font-bold">→</span>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold">{bucket.name}</h3>
                    <p className="text-sm text-gray-500">
                      Members: {bucket.members.length}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bucket Detail - Sticky */}
        <div className="flex-1">
          {selectedBucket ? (
            <div className="sticky top-1">
              <BucketDetail bucketId={selectedBucket._id} />
            </div>
          ) : (
            <p className="text-gray-500">Select a bucket to see details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;