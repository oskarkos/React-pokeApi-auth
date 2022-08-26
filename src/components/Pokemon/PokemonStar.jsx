import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const PokemonStar = ({ isFavorite, onClick }) => {
  return (
    <div onClick={onClick}>
      {isFavorite ? (
        <FontAwesomeIcon icon="fa-solid fa-star" />
      ) : (
        <FontAwesomeIcon icon="fa-regular fa-star" />
      )}
    </div>
  );
};
