import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./pages/Header";
import Purchases from "./pages/Purchases";
import Applications from "./pages/Applications";

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        {/* Har doim ekranda turadigan Sidebar */}
        <Sidebar />

        {/* O‘ng tomon - sahifalar */}
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/home" element={<Header />} /> 
            <Route path="/orders" element={<Purchases />} />
            <Route path="/apps" element={<Applications />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
