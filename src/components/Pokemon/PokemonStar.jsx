import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PokemonStar = ({ isFavorite, onClick }) => {
  return (
    <div onClick={onClick}>
      {isFavorite ? (
        <FontAwesomeIcon
          className="text-[#feca1b] cursor-pointer"
          icon="fa-solid fa-star"
        />
      ) : (
        <FontAwesomeIcon
          className="text-[#feca1b] cursor-pointer"
          icon="fa-regular fa-star"
        />
      )}
    </div>
  );
};
