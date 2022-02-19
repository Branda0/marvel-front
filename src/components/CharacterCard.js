import { Link } from "react-router-dom";

const CharacterCard = ({ character }) => {
  console.log(character);
  console.log(`${character.thumbnail.path}.${character.thumbnail.extension}`);
  return (
    <Link className="character-card-container" to={`/character/${character._id}`}>
      <div className="card">
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
