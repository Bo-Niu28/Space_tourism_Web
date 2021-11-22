import "./App.scss";
import "./components/Header.js";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Destination from "./components/Distination";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Des__Mars from "./components/Des__Mars";
import Des__Moon from "./components/Des__Moon";
import Des__Europa from "./components/Des__Europa";
import Des__Titan from "./components/Des__Titan";
import Crew from "./components/Crew";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="destination/*" element={<Destination />}>
            <Route path="moon" element={<Des__Moon />} />
            <Route path="mars" element={<Des__Mars />} />
            <Route path="europa" element={<Des__Europa />} />
            <Route path="titan" element={<Des__Titan />} />
          </Route>
          <Route path="crew/*" element={<Crew />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
