import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Login from './screens/Login';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard';
import BucketDetail from './screens/BucketDetail';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>

          {/* Public routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          
          <Route path="*" element={<p>Page not found</p>} />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;