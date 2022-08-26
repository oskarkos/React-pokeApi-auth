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
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {searchedPokemons.map((item) => {
          return <PokemonCard key={item.id} pokemon={item} />;
        })}
      </div>
    );
  }
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {pokemonShowingItems &&
        pokemonShowingItems.map((item) => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
    </div>
  );
};
