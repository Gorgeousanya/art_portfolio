import Home from './Pages/Home';
import Store from "./Pages/Store";
import Contact from "./Pages/Contact";
import Bio from './Pages/Bio';
import { Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/bio" element={<Bio />} exact />
        <Route path='/works' element={<Store />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
    </div>
  );
}

export default App;

