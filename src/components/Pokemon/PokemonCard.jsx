import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import { PokemonStar } from "./PokemonStar";

export const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();

  const handleOnClickFav = () => {
    dispatch(setFavorite(pokemon.id));
  };

  return (
    <div className="flex">
      <p>{pokemon.name}</p>
      <PokemonStar isFavorite={pokemon.isFavorite} onClick={handleOnClickFav} />
    </div>
  );
};
