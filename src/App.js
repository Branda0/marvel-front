import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEye,
  faXmark,
  faMagnifyingGlass,
  faCaretUp,
  faCaretDown,
  faPlus,
  faSpinner,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//pages import
import Characters from "./pages/Characters";
import Character from "./pages/Character";
import Comics from "./pages/Comics";
import Comic from "./pages/Comic";
import Favorites from "./pages/Favorites";

//components import
import Header from "./components/Header";
import Menu from "./components/Menu";

library.add(
  faEye,
  faXmark,
  faMagnifyingGlass,
  faCaretUp,
  faCaretDown,
  faSpinner,
  faPlus,
  faChevronLeft,
  faChevronRight
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comic/:id" element={<Comic />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
