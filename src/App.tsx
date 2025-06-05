import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BadgesPage from './pages/BadgesPage';
import Certifications from './components/Certifications';

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Certifications/>
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/badges" element={<BadgesPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;