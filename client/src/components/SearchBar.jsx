import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry } from "../actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setInput(e.target.value);
    console.log(input);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameCountry(input));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar paises..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e)=> handleSubmit(e)}>Buscar</button>
    </div>
  );
}
