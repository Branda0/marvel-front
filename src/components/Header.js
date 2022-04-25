import { useState } from "react";
import logoHeader from "../assets/img/MarvelLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerModal from "./BurgerModal";

const Header = ({ isLogged, burgerModal, setTokens, setBurgerModal, setSignupModal, setLoginModal }) => {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <div className="header container">
      <img src={logoHeader} alt="" />
      <div className="right-header">
        <div className="desktop-menu">
          {isLogged ? (
            <button
              onClick={() => {
                setTokens(null);
              }}
              className="disconnect-btn"
            >
              SIGN OUT
            </button>
          ) : (
            <>
              <div className="loggin-signup-btn-container ">
                <button onClick={() => setSignupModal(true)}>SIGN UP</button>
                <button onClick={() => setLoginModal(true)}>LOGIN</button>
              </div>
            </>
          )}
        </div>
        <div
          className={`burger-menu ${burgerModal ? "opened" : ""}`}
          onClick={() => setBurgerModal(!burgerModal)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
