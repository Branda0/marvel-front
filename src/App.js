import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.scss";
import { library } from "@fortawesome/fontawesome-svg-core";

import Cookies from "js-cookie";

import {
  faEye,
  faXmark,
  faMagnifyingGlass,
  faCaretUp,
  faCaretDown,
  faSpinner,
  faChevronLeft,
  faChevronRight,
  faBars,
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
import Login from "./components/Login";
import Signup from "./components/Signup";
import BurgerModal from "./components/BurgerModal";

library.add(
  faEye,
  faBars,
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
  const [isLogged, setIsLogged] = useState(Cookies.get("userToken") ? true : false);

  const [signupModal, setSignupModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [burgerModal, setBurgerModal] = useState(false);

  const storedCharactersFavorites = JSON.parse(localStorage.getItem("charactersFavorites"));
  const storedComicsFavorites = JSON.parse(localStorage.getItem("comicsFavorites"));

  const [charactersFavorites, setCharactersFavorites] = useState(storedCharactersFavorites || []);
  const [comicsFavorites, setComicsFavorites] = useState(storedComicsFavorites || []);

  useEffect(() => {
    localStorage.setItem("charactersFavorites", JSON.stringify(charactersFavorites));
    localStorage.setItem("comicsFavorites", JSON.stringify(comicsFavorites));
  }, [charactersFavorites, comicsFavorites]);

  // localStorage.clear();
  const setTokens = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 7 });
      setIsLogged(true);
    } else {
      Cookies.remove("userToken");
      setIsLogged(false);
    }
  };

  return (
    <Router>
      <div className={`app-container ${(loginModal || signupModal) && "modal-no-scroll"}`}>
        <Header
          isLogged={isLogged}
          burgerModal={burgerModal}
          setTokens={setTokens}
          setSignupModal={setSignupModal}
          setLoginModal={setLoginModal}
          setBurgerModal={setBurgerModal}
        />
        {loginModal && (
          <Login setTokens={setTokens} setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
        )}
        {signupModal && (
          <Signup setTokens={setTokens} setLoginModal={setLoginModal} setSignupModal={setSignupModal} />
        )}
        {burgerModal && (
          <BurgerModal
            isLogged={isLogged}
            burgerModal={burgerModal}
            setBurgerModal={setBurgerModal}
            setTokens={setTokens}
            setSignupModal={setSignupModal}
            setLoginModal={setLoginModal}
          />
        )}
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
