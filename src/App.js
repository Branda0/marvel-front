import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faEye,
  faXmark,
  faMagnifyingGlass,
  faCaretUp,
  faCaretDown,
  faSpinner,
  faChevronLeft,
  faChevronRight,
  faHeart as fasFaHeart,
} from "@fortawesome/free-solid-svg-icons";

import { faHeart as farFaHeart } from "@fortawesome/free-regular-svg-icons";

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
  faChevronLeft,
  faChevronRight,
  fasFaHeart,
  farFaHeart
);

function App() {
  const storedCharactersFavorites = JSON.parse(localStorage.getItem("charactersFavorites"));
  const storedComicsFavorites = JSON.parse(localStorage.getItem("comicsFavorites"));

  const [charactersFavorites, setCharactersFavorites] = useState(storedCharactersFavorites || []);
  const [comicsFavorites, setComicsFavorites] = useState(storedComicsFavorites || []);

  useEffect(() => {
    localStorage.setItem("charactersFavorites", JSON.stringify(charactersFavorites));
    localStorage.setItem("comicsFavorites", JSON.stringify(comicsFavorites));
  }, [charactersFavorites, comicsFavorites]);

  // localStorage.clear();

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Menu />
        <Routes>
          <Route
            path="/"
            element={
              <Characters
                setCharactersFavorites={setCharactersFavorites}
                setComicsFavorites={setComicsFavorites}
                charactersFavorites={charactersFavorites}
                comicsFavorites={comicsFavorites}
              />
            }
          />
          <Route
            path="/character/:id"
            element={<Character comicsFavorites={comicsFavorites} setComicsFavorites={setComicsFavorites} />}
          />
          <Route
            path="/comics"
            element={<Comics setComicsFavorites={setComicsFavorites} comicsFavorites={comicsFavorites} />}
          />
          <Route path="/comic/:id" element={<Comic />} />
          <Route
            path="/favorites"
            element={
              <Favorites
                setCharactersFavorites={setCharactersFavorites}
                setComicsFavorites={setComicsFavorites}
                charactersFavorites={charactersFavorites}
                comicsFavorites={comicsFavorites}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
