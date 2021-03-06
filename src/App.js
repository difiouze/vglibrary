import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import GameList from "./components/GameList";
import SearchBox from "./components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Favorites from "./components/Favorites"

function App() {
  const [games, setGames] = useState([]);
  const [searchGame, setSearchGame] = useState("");
  const [favorite, setFavorite] = useState([]);

  const getGames = (searchGame) => {
    axios
      .get(`https://api.rawg.io/api/games?search=${searchGame}&search_exact`, {
        params: {
          key: "bb9dc1950eb54445961359f37e4a4e67",
          page_size: 30
        },
      })
      .then((response) => {
        // handle success
        let gamesResponse = response.data.results;
        console.log(gamesResponse);
        setGames(gamesResponse);
      })
      .catch((error) => {
        console.log("Can't connect to API...", error.message);
      });
  };

const addFavorite = (newGame) => {
  setFavorite([...favorite, newGame])
  setGames(games.filter((el) => el.id !== newGame.id));
}

  useEffect(() => {
    getGames(searchGame);
    console.log(searchGame);
  }, [searchGame]);

  return (
    <div className="App">
      <Container>
        <header className="App-header">
          <h1 className="title pt-5 pb-2">Video Games List</h1>
        </header>
        <SearchBox setSearchGame={setSearchGame} />
        <GameList games={games} addFavorite={addFavorite}/>
      </Container>
      <Favorites favorite={favorite} setFavorite={setFavorite} />
    </div>
  );
}

export default App;
