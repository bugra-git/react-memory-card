import "../styles/App.css";
import { useState, useEffect } from "react";
import Game from "./Game.jsx";

function App() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151",
        );

        const data = await response.json();

        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const detailResponse = await fetch(pokemon.url);
            const detailData = await detailResponse.json();

            return {
              id: detailData.id,
              name: detailData.name,
              image: detailData.sprites.other.dream_world.front_default,
              types: detailData.types.map((typeInfo) => typeInfo.type.name),
            };
          }),
        );

        setPokemonData(pokemonDetails);
      } catch (error) {
        console.error(error);
      }
    }

    fetchPokemon();
  }, []);

  return (
    <>
      <header>
        <h1>Memory Card Game</h1>
        <p>
          Get points by clicking on an image but don't click on any more than once!
        </p>
      </header>
      <main>
        {pokemonData.length > 0 && <Game pokemonData={pokemonData} />}
      </main>
      <footer>
        <p>&copy; 2026 Memory Card Game. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
