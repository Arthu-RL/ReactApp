// import React from "react";
import '../styles/App.css'
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home/components/Home";
import Contact from "./Contact/components/Contact";
import About from "./About/components/About";
import Articles from './Articles/components/Articles';
import Calculator from './Calculator/components/Calculator';
import Lemon from './Lemon/components/Lemon';
import SignUp from './SignUp/components/SignUp';
import Lab from './Lab/components/Lab';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Articles" element={<Articles />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About title="About Me" />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Lemon" element={<Lemon />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Lab" element={<Lab />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
