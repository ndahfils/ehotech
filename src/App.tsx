import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Route d'administration sans header/footer */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/*" element={<Admin />} />
          
          {/* Routes publiques avec header/footer */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/services" element={
            <>
              <Header />
              <Services />
              <Footer />
            </>
          } />
          <Route path="/projets" element={
            <>
              <Header />
              <Projects />
              <Footer />
            </>
          } />
          <Route path="/apropos" element={
            <>
              <Header />
              <About />
              <Footer />
            </>
          } />
          <Route path="/contact" element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;