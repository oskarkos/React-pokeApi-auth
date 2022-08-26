import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchDetailedPokemon } from "../slices/dataSlice";
import { NavBar } from "../components/ui/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Details = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const pokemonInfo =
    useSelector(
      (initialState) => initialState.data.detailedPokemon,
      shallowEqual
    ) || {};

  const loading = useSelector((initialState) => initialState.ui.loading);
  const allTypes = pokemonInfo?.types?.map((item) => item.type.name).join(", ");
  const allMoves = pokemonInfo?.moves?.map((item) => item.move.name).join(", ");
  const allAbilities = pokemonInfo?.abilities
    ?.map((item) => item.ability.name)
    .join(", ");

  useEffect(() => {
    dispatch(fetchDetailedPokemon(params.pokemon));
  }, []);

  const handleNavigateHome = () => {
    navigate({
      pathname: "/",
    });
  };

  return (
    <div>
      <NavBar />
      {!loading ? (
        <div className="flex flex-col justify-center py-8 px-4 gap-7">
          <p className="text-[#3761a8] text-5xl flex items-center font-bold uppercase">
            <FontAwesomeIcon
              onClick={handleNavigateHome}
              className="mr-4 text-3xl  cursor-pointer"
              icon="fa-solid fa-arrow-left"
            />
            {pokemonInfo?.name}
          </p>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 place-items-stretch">
            <img
              className="rounded-xl border-2 border-[#3761a8]"
              src={pokemonInfo?.sprites?.back_default}
              alt={pokemonInfo?.name}
            />
            <img
              className="rounded-xl border-2 border-[#3761a8]"
              src={pokemonInfo?.sprites?.front_default}
              alt={pokemonInfo?.name}
            />
            <img
              className="rounded-xl border-2 border-[#3761a8]"
              src={pokemonInfo?.sprites?.back_shiny}
              alt={pokemonInfo?.name}
            />
            <img
              className="rounded-xl border-2 border-[#3761a8]"
              src={pokemonInfo?.sprites?.front_shiny}
              alt={pokemonInfo?.name}
            />
          </div>
          <div className="flex">
            <h1 className="font-bold mr-3">Abilities</h1>
            <p>{allAbilities}</p>
          </div>
          <div className="flex">
            <h1 className="font-bold mr-3">Moves</h1>
            <p>{allMoves}</p>
          </div>
          <div className="flex">
            <h1 className="font-bold mr-3">Types</h1>
            <p> {allTypes}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
