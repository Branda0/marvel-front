import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CharacterCard from "../components/CharacterCard";
import Loading from "../components/Loading";

const Characters = ({ charactersFavorites, setCharactersFavorites }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const storedPage = Number(localStorage.getItem("page"));
  const storedSearch = localStorage.getItem("search");

  const [page, setPage] = useState(storedPage || 1);
  const [search, setSearch] = useState(storedSearch || "");

  useEffect(() => {
    localStorage.setItem("page", Number(page));
    localStorage.setItem("search", String(search));

    try {
    } catch (error) {
      console.log({ error: error.message });
    }
    const fetchData = async () => {
      //   const response = await axios.get(`http://localhost:4000/characters?page=${page}&name=${characterName}`);
      const response = await axios.get(
        `https://brandao-marvel.herokuapp.com/characters?page=${page}&name=${search}`
      );

      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [page, search]);

  return isLoading ? (
    <div className="loading-page">
      <Loading />
    </div>
  ) : (
    <div className="page container">
      <div className="navBar">
        <div className="searchBar">
          <FontAwesomeIcon className="search-icon" icon="magnifying-glass" />
          <input
            placeholder="SEARCH YOUR CHARACTER"
            type="text"
            value={search.toUpperCase()}
            onChange={(event) => {
              setSearch(event.target.value);
              setPage(1);
            }}
          ></input>
          <span>{data.count} Results</span>
        </div>
        <div className="page-selector">
          {page === 1 || data.count === 0 ? (
            <FontAwesomeIcon
              className="prec-page icon"
              icon="chevron-left"
              style={{ color: "transparent" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setPage((page) => page - 1)}
              className="prec-page icon"
              icon="chevron-left"
            />
          )}
          <span>
            {data.count === 0 ? 0 : page} / {Math.ceil(data.count / 100)}
          </span>
          {page === Math.ceil(data.count / 100) || data.count === 0 ? (
            <FontAwesomeIcon
              className="next-page icon"
              icon="chevron-left"
              style={{ color: "transparent" }}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => setPage((page) => page + 1)}
              className="next-page icon"
              icon="chevron-right"
            />
          )}
        </div>
      </div>

      <div className="cards-container">
        {data.results.map((character) => {
          if (
            character.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
          ) {
            return (
              <CharacterCard
                key={character._id}
                character={character}
                setCharactersFavorites={setCharactersFavorites}
                charactersFavorites={charactersFavorites}
              />
            );
          } else {
            return <div key={character._id}></div>;
          }
        })}
      </div>
    </div>
  );
};

export default Characters;
