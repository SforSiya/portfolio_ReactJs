import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Ensure correct imports
import Navbar from './pages/navbar';
import Intro from './pages/intro';
import Skills from './pages/skills';
import Projects from './pages/project';
import Contact from './pages/contact';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/" element={<Intro />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> {/* Replace Switch with Routes */}
      </div>
    </Router>
  );
}
export default App;




