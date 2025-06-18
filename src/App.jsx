import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateRental from './pages/UpdateRental';

const App = () => {
  return (
    <Router>
      <nav style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <Link to="/">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/update-rental">Update Rental</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/update-rental" element={<UpdateRental />} />
      </Routes>
    </Router>
  );
};

export default App;