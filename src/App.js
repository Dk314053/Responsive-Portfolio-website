
import React from 'react'
import Header from './Component/header/Header';
import Navbar from './Component/nav/Navbar';
import About from './Component/about/About';
import Experience from './Component/experience/Experience';
import Services from './Component/services/Services';
import Portfolio from './Component/portfolio/Portfolio';
import Testimonial from './Component/Testimonials/Testimonial';
import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer';


function App() {
  return (
    <div className="App">
    <Header />
    <Navbar/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
