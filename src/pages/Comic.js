import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Comic = () => {
  const location = useLocation();
  const { comic } = location.state;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${comic.thumbnail.path}.${comic.thumbnail.extension})` }}
    >
      <div className="comic">
        <div className="container">
          <div className="comic-infos">
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="character" />
            <div className="comic-text-container">
              <h2>{comic.title}</h2>
              <p>{comic.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comic;
