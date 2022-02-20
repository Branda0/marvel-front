import logoHeader from "../assets/img/MarvelLogo.png";

const Header = ({ isLogged, setTokens, setSignupModal, setLoginModal }) => {
  return (
    <div className="header container">
      <img src={logoHeader} alt="" />
      <div className="right-header">
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
          <div className="loggin-signup-btn-container ">
            <button onClick={() => setSignupModal(true)}>SIGN UP</button>
            <button onClick={() => setLoginModal(true)}>LOGIN</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
