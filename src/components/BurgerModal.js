const BurgerModal = ({ setTokens, setBurgerModal, burgerModal, isLogged, setLoginModal, setSignupModal }) => {
  return (
    <div
      className="modal-bg"
      onClick={() => {
        setBurgerModal(false);
      }}
    >
      <div className="burger-modal" onClick={(e) => e.stopPropagation()}>
        <span>YYOYOYYOYOYOYOOYOYOYO</span>
        {isLogged ? (
          <button
            onClick={() => {
              setTokens(null);
              //   setBurgerModal(false);
            }}
            className="disconnect-btn"
          >
            SIGN OUT
          </button>
        ) : (
          <>
            <div className="loggin-signup-btn-container ">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setSignupModal(true);
                  setBurgerModal(false);
                }}
              >
                SIGN UP
              </button>
              <button
                onClick={() => {
                  setLoginModal(true);
                  setBurgerModal(false);
                }}
              >
                LOGIN
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BurgerModal;
