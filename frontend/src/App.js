import "./App.css";
import Register from "./components/Auth/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/register" element={<Register/>} />
        </Routes>
      </Router>
  );
}

export default App;
