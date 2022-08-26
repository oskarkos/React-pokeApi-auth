import React from "react";

import { PaginationItems } from "../components/Pagination/PaginationItems";
import { NavBar } from "../components/ui/NavBar";

import PokeballImage from "../assets/pokeball.png";
import PokemonImage from "../assets/pokemon.png";

export const Home = () => {
  return (
    <div className="w-full relative bg-gray-200 h-screen">
      <NavBar />
      <div className="flex flex-col justify-center items-center p-6 gap-6">
        <div className="flex h-40">
          <img
            className="w-auto h-40 object-cover"
            src={PokeballImage}
            alt="Pokeball"
          />
          <img
            className="w-auto h-32 object-cover"
            src={PokemonImage}
            alt="pokemon"
          />
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-bold text-[#3761a8] text-center">
            Welcome to 1st Generation pokedex
          </h1>
          <p className="text-sm mt-2 text-center">
            Here you will find all the pokemos that we have always loved.
          </p>
        </div>
      </div>
      <PaginationItems itemsPerPage={20} />
    </div>
  );
};
