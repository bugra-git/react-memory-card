import { useState } from "react";
import Card from "./Card.jsx";
import "../styles/Game.css";

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}

function Game({ pokemonData }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [deck, setDeck] = useState(shuffle([...pokemonData]).slice(0, 12));
  const [clicked, setClicked] = useState([]);

  function play(pokemonId) {
    if (clicked.includes(pokemonId) || clicked.length === 11) {
      setScore(0);
      setClicked([]);
      setDeck(shuffle([...pokemonData]).slice(0, 12));
      if (clicked.length === 11) {
        alert("Congratulations! You've won the game!");
        if (highScore < 12) {
          setHighScore(12);
        }
      } else {
        alert("You clicked on the same Pokémon! Game over.");
      }
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClicked([...clicked, pokemonId]);
      setDeck(prevDeck => shuffle([...prevDeck]));
      if (newScore > highScore) {
        setHighScore(newScore);
      }
    }
  }

  return (
    <>
      <div className="scoreboard">
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div className="game-board">
        {deck.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
            onClick={() => play(pokemon.id)}
          />
        ))}
      </div>
    </>
  );
}

export default Game;
