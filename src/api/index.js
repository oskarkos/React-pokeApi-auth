import axios from "axios";

export const getPokemons = async () => {
  const PokemonsResponse = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`
  );
  return PokemonsResponse.data.results;
};

export const getPokemonDetails = async (pokemon) => {
  const pokemonDetails = await axios.get(pokemon.url);
  return pokemonDetails.data;
};
