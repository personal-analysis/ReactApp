import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.min.css";
// import logo from './logo.svg';
import Home from './pages/Home.js'
import Prid from './pages/Prid.js'
import Company from './pages/Company.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/prid" element={<Prid />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

