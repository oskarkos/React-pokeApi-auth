import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../slices/dataSlice";
import { setSearchedInput } from "../../slices/uiSlice";

export const InputSearch = () => {
  const [valueInput, setValueInput] = useState("");
  const dispatch = useDispatch();

  const HandleSearch = ({ target }) => {
    setValueInput(target.value);
    dispatch(setSearchedInput(target.value));
  };

  useEffect(() => {
    dispatch(setSearch(valueInput));
  }, [valueInput]);

  return (
    <div className="list_container">
      <input type="text" onChange={HandleSearch} />
    </div>
  );
};
