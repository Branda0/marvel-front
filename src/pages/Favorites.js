import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

import ComicCard from "../components/ComicCard";
import CharacterCard from "../components/CharacterCard";

const Favorites = ({ setCharactersFavorites, setComicsFavorites, charactersFavorites, comicsFavorites }) => {
  //TRUE for characters  ///  FALSE for comics
  const [pageChoice, setPageChoice] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchComic, setSearchComic] = useState("");

  console.log("FAVORITES COMICS ====>", comicsFavorites);
  console.log("FAVORITES CHAR ===>", charactersFavorites);

  return (
    <div className="page container">
      <div className="choices">
        <span className="text">YOUR FAVORITES</span>
        <span className={`choice ${!pageChoice && "notSelected"}`} onClick={() => setPageChoice(!pageChoice)}>
          CHARACTERS
        </span>
        <span>/</span>
        <span className={`choice ${pageChoice && "notSelected"}`} onClick={() => setPageChoice(!pageChoice)}>
          COMICS
        </span>
      </div>

      {pageChoice ? (
        <>
          <div className="navBar">
            <div className="searchBar favorite">
              <FontAwesomeIcon className="search-icon" icon="magnifying-glass" />
              <input
                placeholder="SEARCH YOUR FAVORITE CHARACTER"
                type="text"
                value={searchCharacter.toUpperCase()}
                onChange={(event) => {
                  setSearchCharacter(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="cards-container">
            {charactersFavorites.map((character) => {
              return (
                character.name.toUpperCase().includes(searchCharacter.toUpperCase()) && (
                  <CharacterCard
                    key={character._id}
                    character={character}
                    setCharactersFavorites={setCharactersFavorites}
                    charactersFavorites={charactersFavorites}
                  />
                )
              );
            })}
          </div>
        </>
      ) : (
        <>
          <div className="navBar">
            <div className="searchBar favorite">
              <FontAwesomeIcon className="search-icon" icon="magnifying-glass" />
              <input
                placeholder="SEARCH YOUR FAVORITE COMIC"
                type="text"
                value={searchComic.toUpperCase()}
                onChange={(event) => {
                  setSearchComic(event.target.value);
                }}
              ></input>
            </div>
          </div>
          <div className="cards-container">
            {comicsFavorites.map((comic) => {
              return (
                comic.title.toUpperCase().includes(searchComic.toUpperCase()) && (
                  <ComicCard
                    key={comic._id}
                    comic={comic}
                    comicsFavorites={comicsFavorites}
                    setComicsFavorites={setComicsFavorites}
                  />
                )
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Favorites;
