import axios from "axios";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ComicCard from "../components/ComicCard";
import Loading from "../components/Loading";

const Comics = ({ setComicsFavorites, comicsFavorites }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const storedPage = Number(localStorage.getItem("comicPage"));
  const storedSearch = localStorage.getItem("searchComics");

  const [page, setPage] = useState(storedPage || 1);
  const [search, setSearch] = useState(storedSearch || "");

  useEffect(() => {
    localStorage.setItem("comicPage", Number(page));
    localStorage.setItem("searchComics", String(search));

    try {
    } catch (error) {
      console.log({ error: error.message });
    }
    const fetchData = async () => {
      //   const response = await axios.get(`http://localhost:4000/characters?page=${page}&name=${characterName}`);
      const response = await axios.get(
        `https://brandao-marvel.herokuapp.com/comics?page=${page}&title=${search}`
      );

      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [page, search]);

  return !isLoading ? (
    <Loading />
  ) : (
    <div className="page container">
      <div className="navBar">
        <div className="searchBar">
          <FontAwesomeIcon className="search-icon" icon="magnifying-glass" />
          <input
            placeholder="SEARCH YOUR COMIC"
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
          {page === 1 ? (
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
            {page} / {Math.ceil(data.count / 100)}
          </span>
          {page === Math.ceil(data.count / 100) ? (
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
        {data.results.map((comic) => {
          if (comic.thumbnail.path !== "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available") {
            return (
              <ComicCard
                key={comic._id}
                comic={comic}
                comicsFavorites={comicsFavorites}
                setComicsFavorites={setComicsFavorites}
              />
            );
          } else {
            return <></>;
          }
        })}
      </div>
    </div>
  );
};

export default Comics;
