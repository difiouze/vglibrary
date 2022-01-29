import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import GameList from "./components/GameList";
import SearchBox from "./components/SearchBox";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

function App() {
  const [games, setGames] = useState([]);
  const [searchGame, setSearchGame] = useState("");
  const [favorite, setFavorite] = useState([]);

  const getGames = (searchGame) => {
    axios
      .get(`https://api.rawg.io/api/games?search=${searchGame}`, {
        params: {
          key: "bb9dc1950eb54445961359f37e4a4e67",
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
  console.log(newGame);
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
        <GameList games={games} favorite={addFavorite}/>
      </Container>
    </div>
  );
}

export default App;
