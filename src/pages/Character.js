import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ComicCard from "../components/ComicCard";
import Loading from "../components/Loading";

const Character = ({ comicsFavorites, setComicsFavorites }) => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    try {
    } catch (error) {
      console.log({ error: error.message });
    }
    const fetchData = async () => {
      // const response = await axios.get(`http://localhost:4000/comics/${id}`);
      const response = await axios.get(`https://brandao-marvel.herokuapp.com/comics/${id}`);

      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="character container">
      <div className="character-infos">
        <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="character" />
        <div className="character-text-container">
          <h1>{data.name.toUpperCase()}</h1>
          <p>{data.description}</p>
        </div>
      </div>

      {data.comics.length > 0 && (
        <>
          <span>Featured in ...</span>
          <div className="comics-thumbnails">
            {data.comics &&
              data.comics.map((comic) => {
                if (
                  comic.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                ) {
                  return (
                    <ComicCard
                      key={comic._id}
                      comic={comic}
                      comicsFavorites={comicsFavorites}
                      setComicsFavorites={setComicsFavorites}
                    />
                  );
                }
              })}
          </div>
        </>
      )}
    </div>
  );
};

export default Character;
