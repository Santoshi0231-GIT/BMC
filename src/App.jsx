import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Navbar from "./components/shared/Navbar.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import Service from "./components/pages/Service.jsx";
import ProtectedRoute from "./auth/protectedRoute.jsx";
import Navbar from "./components/shared/Navbar.jsx";
// The main App component.
const App = () => {
  const navlink = {
    home: "Home",
    service: "Service",
    about: "About",
    contact: "Contact",
  };

  return (
    <Router>
      <Navbar links={navlink} />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/service" element={<Service value="One" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/protectedroute" element={<ProtectedRoute />} />
          <Route path="/Navbar"element={<Navbar/>}></Route>
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;