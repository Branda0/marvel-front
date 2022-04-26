const BurgerModal = ({ setTokens, setBurgerModal, burgerModal, isLogged, setLoginModal, setSignupModal }) => {
  return (
    <div
      className="modal-bg"
      onClick={() => {
        setBurgerModal(false);
      }}
    >
      <div className="burger-modal" onClick={(e) => e.stopPropagation()}>
        {isLogged ? (
          <span
            onClick={() => {
              setTokens(null);
              setBurgerModal(false);
            }}
            className="disconnect-btn"
          >
            SIGN OUT
          </span>
        ) : (
          <>
            <span
              onClick={(e) => {
                e.preventDefault();
                setSignupModal(true);
                setBurgerModal(false);
              }}
            >
              SIGN UP
            </span>
            <span
              onClick={() => {
                setLoginModal(true);
                setBurgerModal(false);
              }}
            >
              LOGIN
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default BurgerModal;
