import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import EditProfile from './views/EditProfile/EditProfile';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;