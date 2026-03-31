import { useState } from 'react';
import API from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post('/auth/register', {
        username,
        email,
        password
      });

      navigate('/login');
    } catch (err) {
      alert('Register failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Username"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
          >
            Register
          </button>

        </form>

        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 font-semibold">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;