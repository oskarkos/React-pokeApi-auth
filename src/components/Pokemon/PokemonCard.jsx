import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setFavorite } from "../../slices/dataSlice";
import { PokemonStar } from "./PokemonStar";
import { useNavigate } from "react-router-dom";

export const PokemonCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnClickFav = () => {
    dispatch(setFavorite(pokemon.id));
  };

  const handleShowDetails = () => {
    const routePath = `/details/${pokemon.name}`;
    console.log("clicked", routePath);
    navigate({
      pathname: routePath,
    });
  };

  const capitalizeFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="flex flex-col items-center border-2 p-3 shadow-lg bg-white border-[#3761a8] rounded-2xl">
      <div className="flex w-full justify-between border-b-2 py-2 border-[#3761a8]">
        <div>
          <p className="text-black">{capitalizeFirst(pokemon.name)}</p>
        </div>
        <div>
          <PokemonStar
            isFavorite={pokemon.isFavorite}
            onClick={handleOnClickFav}
          />
        </div>
      </div>
      <div
        className="w-full cursor-pointer flex flex-col items-center"
        onClick={handleShowDetails}
      >
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <p className="text-center underline text-xs text-blue-400">Details</p>
      </div>
    </div>
  );
};
