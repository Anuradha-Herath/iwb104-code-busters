// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import ServiceCards from './Components/ServiseCards/ServiceCards';
import './App.css';
import Home from './Components/Home/Home';
import SignUp from './Components/Signup/Signup'; 
import Login from './Components/Login/Login';
import TaskerForm from './Components/TaskerForm/TaskerForm';
import ProfilePage from './Components/Profilepage/Profilepage';
import Seller from './Components/Seller/seller';
import BookingForm from './Components/Book/Book';
import AboutUs from './Components/AboutUs/AboutUs';
import Admin from './Components/Admin/Admin';

const AppContent = () => {
  const location = useLocation();

  // List of routes where you don't want to show the Navbar
  const hideNavbarPaths = ['/admin'];

  return (
    <div className="app-container">
      {/* Only show Navbar if current path is NOT in hideNavbarPaths */}
      {!hideNavbarPaths.includes(location.pathname) && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServiceCards />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/become-tasker" element={<TaskerForm />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
