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
  
  return (
    <>
      <div>
        <h2>Score: {score}</h2>
        <h2>High Score: {highScore}</h2>
      </div>
      <div>
        {deck.map((pokemon) => (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            types={pokemon.types}
          />
        ))}
      </div>
    </>
  );
}

export default Game;
