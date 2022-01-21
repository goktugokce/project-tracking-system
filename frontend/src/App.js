import "./App.css";
import Register from "./components/Register/Register";
import Login from "./components/Auth/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </Router>
  );
}

export default App;
