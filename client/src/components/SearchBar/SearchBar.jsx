import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameCountry, setCurrentPage} from "../../redux/actions";

import "./SearchBar.css"


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

  const refreshPage = ()=>{
    window.location.reload();
 }

  return (
    <div className="search-box">
      <input 
        className="search-input"
        type="text"
        placeholder="Search a country..."
        onChange={(e) => handleInputChange(e)}
      />
      <button type="submit" onClick={(e)=> handleSubmit(e)} className="search-button">GO THERE!</button>
      <button type="submit" onClick={refreshPage} className="search-button2">REFRESH</button>
    </div>
  );
}
