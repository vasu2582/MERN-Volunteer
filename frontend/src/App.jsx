import React from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./components/Home";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
       <Router>
           <Navbar />
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donate" element={<Donate />} />
                <Route path="*" element={<NotFound />} />
           </Routes>
           <Footer />
           <ToastContainer position="top-center" />
       </Router>
    </>
  );
}

export default App;