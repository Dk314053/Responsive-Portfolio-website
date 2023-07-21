
import React from 'react'
import Header from './Component/header/Header';
import Navbar from './Component/nav/Navbar';
import About from './Component/about/About';
import Experience from './Component/experience/Experience';
import Project from './Component/projects/Project';

import Contact from './Component/contact/Contact';
import Footer from './Component/footer/Footer';


function App() {
  return (
    <div className="App">
    <Header />
    <Navbar/>
    <About/>
    <Experience/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
