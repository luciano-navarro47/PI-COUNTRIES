import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../actions";
import { setCurrentPage } from "../actions";


export default function SearchBar() {

  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCountry(input));
    dispatch(setCurrentPage(1))
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search country..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e)=> handleSubmit(e)}>Search</button>
    </div>
  );
}
