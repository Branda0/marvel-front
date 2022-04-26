import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CharacterCard = ({ character, charactersFavorites, setCharactersFavorites }) => {
  const favoriteIndex = charactersFavorites.findIndex((favorite) => favorite._id === character._id);

  const handleFavorite = (event) => {
    event.preventDefault();

    const newFavorites = [...charactersFavorites];

    if (favoriteIndex === -1) {
      newFavorites.push({
        _id: character._id,
        name: character.name,
        thumbnail: { path: character.thumbnail.path, extension: character.thumbnail.extension },
        description: character.description,
      });
    } else {
      newFavorites.splice(favoriteIndex, 1);
    }

    setCharactersFavorites(newFavorites);
  };

  return (
    <Link className="character-card-container" to={`/character/${character._id}`}>
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

        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="" />
        <div className="card-content">
          <p>{character.description}</p>
          <h2>{character.name}</h2>
        </div>
      </div>
    </Link>
  );
};
export default CharacterCard;
