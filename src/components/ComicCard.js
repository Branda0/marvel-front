import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ComicCard = ({ comic, setComicsFavorites, comicsFavorites }) => {
  const favoriteIndex = comicsFavorites.findIndex((favorite) => favorite._id === comic._id);

  const handleFavorite = (event) => {
    event.preventDefault();

    const newFavorites = [...comicsFavorites];

    if (favoriteIndex === -1) {
      newFavorites.push({
        _id: comic._id,
        title: comic.title,
        thumbnail: { path: comic.thumbnail.path, extension: comic.thumbnail.extension },
      });
    } else {
      newFavorites.splice(favoriteIndex, 1);
    }

    setComicsFavorites(newFavorites);
  };

  console.log("COMIC ====>", comic);
  return (
    <Link className="comic-card-container" to={`/comic/${comic._id}`} state={{ comic }}>
      <div className="card">
        {favoriteIndex === -1 ? (
          <FontAwesomeIcon className="heart-icon" onClick={handleFavorite} icon="fa-regular fa-heart" />
        ) : (
          <FontAwesomeIcon
            className="heart-icon favorite"
            onClick={handleFavorite}
            icon="fa-solid fa-heart"
          />
        )}
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
      </div>
      <h2>{comic.title}</h2>
    </Link>
  );
};
export default ComicCard;
