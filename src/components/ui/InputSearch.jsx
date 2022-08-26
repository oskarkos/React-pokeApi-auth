import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../slices/dataSlice";
import { setSearchedInput } from "../../slices/uiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const InputSearch = () => {
  const [valueInput, setValueInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(setSearch(valueInput));
      dispatch(setSearchedInput(valueInput));
    }, 1000);

    return () => clearTimeout(timer);
  }, [valueInput]);

  return (
    <div className="flex border-2 items-center w-full md:w-4/5 lg:w-3/6 bg-white border-[#3761a8] rounded-md px-4 py-2">
      <FontAwesomeIcon
        className="text-[#3761a8]"
        icon="fa-solid fa-magnifying-glass"
      />
      <input
        className="w-full ml-4 outline-none"
        type="text"
        placeholder="Search your favorite pokemon"
        onChange={(e) => setValueInput(e.target.value)}
      />
    </div>
  );
};
