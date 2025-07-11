import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import CatalogPage from "./components/CatalogPage";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalogue" element={<CatalogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
