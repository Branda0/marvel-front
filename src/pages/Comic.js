import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Comic = () => {
  const location = useLocation();
  const { comic } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="comic">
      <div className="background-img">
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
      </div>
      <div className="container">
        <div className="comic-infos">
          <div className="comic-img-container">
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="character" />
          </div>
          <div className="comic-text-container">
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
          </div>
        </div>
        {/* <h1 className=" title container">Visible dans ...</h1> */}
      </div>
    </div>
  );
};

export default Comic;
