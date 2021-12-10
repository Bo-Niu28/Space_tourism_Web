import "./App.scss";
import "./components/Header.js";
import Header from "./components/Header.js";
import Home from "./components/Home";
import Destination from "./components/Distination";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Des__Mars from "./components/Des__Mars";
import Des__Moon from "./components/Des__Moon";
import Des__Europa from "./components/Des__Europa";
import Des__Titan from "./components/Des__Titan";
import Crew from "./components/Crew";
import Crew__one from "./components/Crew__one";
import Crew__two from "./components/Crew__two";
import Crew__three from "./components/Crew__three";
import Crew__four from "./components/Crew__four";
import Technology from "./components/Technology";

function App() {
  const activeNav = (e, id) => {
    const path = e.pathname.split("/")[2];
    if (path === id) {
      return "crewNav__active";
    } else {
      return "";
    }
  };
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
          <Route path="crew/*" element={<Crew />}>
            <Route
              path="commander"
              element={<Crew__one activeNav={activeNav} />}
            />
            <Route path="missionspecialist" element={<Crew__two />} />
            <Route path="pilot" element={<Crew__three />} />
            <Route path="elightengineer" element={<Crew__four />} />
          </Route>
          <Route path="technology/*" element={<Technology />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
