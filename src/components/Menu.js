import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="links-container">
        {/* <div className="link"> */}
        <Link className="link" to="/">
          <span>CHARACTERS</span>
        </Link>
        <Link className="link" to="/comics">
          <span>COMICS</span>
        </Link>
        <Link className="link" to="/favorites">
          <span>FAVORITES</span>
        </Link>
        <div>
          <img src="../assets/img/MarvelLogo.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
