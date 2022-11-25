import "./App.css";
import Product from "./pages/product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
