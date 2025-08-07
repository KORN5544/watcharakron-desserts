import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import CardDetail from "./pages/CardDetail";

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Collection" element={<Collection />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/card_detail/:id" element={<CardDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
