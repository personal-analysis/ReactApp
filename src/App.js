import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "simplebar/dist/simplebar.min.css";
// import logo from './logo.svg';
import Home from './pages/Home.js'
import Prid from './pages/Prid.js'
import Envy from './pages/Envy.js'
import Gluttony from './pages/Gluttony.js'
import Greed from './pages/Greed.js'
import Lust from './pages/Lust.js'
import Sloth from './pages/Sloth.js'
import Wrath from './pages/Wrath.js'
import Company from './pages/Company.js'
import PersonalTest from './pages/Personaltest.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personaltest" element={<PersonalTest />} />
        <Route path="/company" element={<Company />} />
        <Route path="/prid" element={<Prid />} />
        <Route path="/envy" element={<Envy />} />
        <Route path="/gluttony" element={<Gluttony />} />
        <Route path="/greed" element={<Greed />} />
        <Route path="/lust" element={<Lust />} />
        <Route path="/sloth" element={<Sloth />} />
        <Route path="/wrath" element={<Wrath />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

