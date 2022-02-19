import { Link } from "react-router-dom";

const ComicCard = ({ comic }) => {
  console.log("COMIC ====>", comic);
  return (
    <Link className="comic-card-container" to={`/comic/${comic._id}`} state={{ comic }}>
      <div className="card">
        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
      </div>
      <h2>{comic.title}</h2>
    </Link>
  );
};
export default ComicCard;
