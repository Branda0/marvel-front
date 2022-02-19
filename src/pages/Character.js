import { useState, useEffect, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ComicCard from "../components/ComicCard";

const Character = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

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

  console.log(data);

  return isLoading ? (
    <span>IS LOADING</span>
  ) : (
    <div className="character">
      <div className="container">
        <div className="character-infos">
          <div className="character-img-container">
            <img src={`${data.thumbnail.path}.${data.thumbnail.extension}`} alt="character" />
          </div>
          <div className="character-text-container">
            <h2>{data.name.toUpperCase()}</h2>
            <p>{data.description}</p>
          </div>
        </div>
        {/* <h1 className=" title container">Visible dans ...</h1> */}
      </div>
      <span>Featured in ...</span>
      {data.comics.length > 0 && (
        <div className="comics-container">
          <div className="container">
            <div className="comics-thumbnails">
              {data.comics &&
                data.comics.map((comic) => {
                  return <ComicCard key={comic._id} comic={comic} />;
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Character;
