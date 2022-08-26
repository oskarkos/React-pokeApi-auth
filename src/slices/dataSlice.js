import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getPokemons, getPokemonDetails, getPokemonByName } from "../api";
import { setLoading } from "./uiSlice";

const initialState = {
  pokemons: [],
  pokemonsSearched: [],
  detailedPokemon: {},
};

export const fetchPokemonWithDetails = createAsyncThunk(
  "data/fetchPokemonWithDetails",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const AllPokemons = await getPokemons();
    const pokemonsDetails = await Promise.all(
      AllPokemons.map((item) => getPokemonDetails(item))
    );
    dispatch(setPokemons(pokemonsDetails));
    dispatch(setLoading(false));
  }
);

export const fetchDetailedPokemon = createAsyncThunk(
  "data/fetchDetailedPokemon",
  async (paramPoke, { dispatch }) => {
    dispatch(setLoading(true));
    const pokemon = await getPokemonByName(paramPoke);
    dispatch(setDetailedPokemon(pokemon));
    dispatch(setLoading(false));
  }
);

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setPokemons: (state, action) => {
      state.pokemons = action.payload;
    },
    setFavorite: (state, action) => {
      const currentPokemonIndex = state.pokemons.findIndex(
        (item) => item.id === action.payload
      );
      if (currentPokemonIndex >= 0) {
        const isFavorite = state.pokemons[currentPokemonIndex].isFavorite;
        state.pokemons[currentPokemonIndex].isFavorite = !isFavorite;
      }
    },
    setSearch: (state, action) => {
      const inputValue = action.payload.toLocaleLowerCase();
      if (action.payload.length > 0) {
        const result = state.pokemons.filter((pokemon) => {
          return pokemon.name.includes(inputValue);
        });
        state.pokemonsSearched = result;
      } else {
        state.pokemonsSearched = [];
      }
    },
    setDetailedPokemon: (state, action) => {
      state.detailedPokemon = action.payload;
    },
  },
});

export const { setFavorite, setPokemons, setSearch, setDetailedPokemon } =
  dataSlice.actions;

export default dataSlice.reducer;
