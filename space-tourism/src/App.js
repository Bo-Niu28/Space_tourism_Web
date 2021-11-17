import "./App.scss";
import "./components/Header.js";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Destination from "./components/Distination";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Des__Mars from "./components/Des__Mars";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />}>
            {/* <Route path='mars' element={<Des__Mars />} */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
