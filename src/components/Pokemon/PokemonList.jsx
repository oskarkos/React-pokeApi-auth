import React from "react";
import { PokemonCard } from "./PokemonCard";

export const PokemonList = ({
  pokemonShowingItems,
  searchedPokemons,
  valueInputSearch,
}) => {
  if (valueInputSearch.length > 0 && searchedPokemons.length < 1) {
    return (
      <div>
        <span>Nothing found, try searching again.</span>
      </div>
    );
  }

  if (searchedPokemons.length > 0) {
    return (
      <div>
        {searchedPokemons.map((item) => {
          return <PokemonCard key={item.id} pokemon={item} />;
        })}
      </div>
    );
  }
  return (
    <div>
      {pokemonShowingItems &&
        pokemonShowingItems.map((item) => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
    </div>
  );
};
