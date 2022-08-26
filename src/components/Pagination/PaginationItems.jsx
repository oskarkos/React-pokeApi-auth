import React, { useEffect, useState } from "react";
import { PokemonList } from "../Pokemon/PokemonList";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchPokemonWithDetails } from "../../slices/dataSlice";
import { InputSearch } from "../ui/inputSearch";

export const PaginationItems = ({ itemsPerPage }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const pokemons =
    useSelector((initialState) => initialState.data.pokemons, shallowEqual) ||
    [];
  const searchedPokemons =
    useSelector(
      (initialState) => initialState.data.pokemonsSearched,
      shallowEqual
    ) || [];
  const loading = useSelector((initialState) => initialState.ui.loading);
  const valueInputSearch =
    useSelector((initialState) => initialState.ui.searchInput) || "";

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemonWithDetails());
  }, []);

  useEffect(() => {
    if (pokemons.length > 0) {
      updateCurrentArray(pokemons);
    }
  }, [itemsPerPage, itemOffset, pokemons]);

  const updateCurrentArray = (pokemonsArray) => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(pokemonsArray.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(pokemonsArray.length / itemsPerPage));
  };

  const handlePageClick = (data) => {
    const newOffset = (data.selected * itemsPerPage) % pokemons.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-full">
      {!loading ? (
        currentItems && (
          <div className="w-full flex flex-col items-center gap-6 p-4">
            <InputSearch />
            <PokemonList
              pokemonShowingItems={currentItems}
              searchedPokemons={searchedPokemons}
              valueInputSearch={valueInputSearch}
            />
            {searchedPokemons < 1 && (
              <ReactPaginate
                containerClassName="flex justify-center"
                pageClassName="w-8 flex justify-center align-center"
                breakLabel="... "
                onPageChange={handlePageClick}
                marginPagesDisplayed={3}
                pageRangeDisplayed={5}
                pageCount={pageCount}
              />
            )}
          </div>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
