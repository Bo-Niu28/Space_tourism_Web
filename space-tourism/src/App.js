import "./App.scss";
import "./components/Header.js";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Destination from "./components/Distination";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
