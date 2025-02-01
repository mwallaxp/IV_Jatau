import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/Component/Navbar'; // Import your Navbar component
import Home from './assets/Component/Home'; // Import your Home component
import AboutUs from './assets/Component/Pages/AboutUs'; // Import your AboutUs component
import Services from './assets/Component/Pages/Services'; // Import your Services component
import Consulting from './assets/Component/Pages/Consulting'; // Import your Consulting component
import Hardware from './assets/Component/Pages/Hardware'; // Import your Hardware component
import Software from './assets/Component/Pages/Software'; // Import your Software component
import Projects from './assets/Component/Pages/Projects'; // Import your Projects component
import News from './assets/Component/Pages/News'; // Import your News component
import Footer from './assets/Component/Footer';
import Drilling from './assets/Component/Pages/Drilling';
import Fencing from './assets/Component/Pages/Fencing';
import ContactForm from './assets/Component/Pages/ContactForm';
import Procurement from './assets/Component/Pages/Procurement';
import Leadership from './assets/Component/Pages/Leadership';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/businesses/consulting" element={<Consulting />} />
        <Route path="/businesses/Drilling" element={<Drilling />} />
        <Route path="/businesses/Fencing" element={<Fencing />} />
        <Route path="/products/hardware" element={<Hardware />} />
        <Route path="/products/software" element={<Software />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="/about/leadership" element={<Leadership />} />
        
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;