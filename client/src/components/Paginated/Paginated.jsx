import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../actions";

export default function Paginated({ countriesPerPage, allCountries, setActive, active, numPage}){
  const pageNumbers = [];

  const dispatch = useDispatch()

  function handlerClick(event){
    event.preventDefault()
    dispatch(setCurrentPage(event.target.value))
    setActive({
      [event.target.name]: true
    })
  }


  for (let i = 0; i <= numPage; i++) {
    pageNumbers.push(i + 1);
  }
  

  return (
          <ul>
             {
             pageNumbers?.map((number) => {
          return (
            <a key={number}> <button value={number} onClick={(event) => handlerClick(event)}> {number} </button> </a>
            )
          })
        }
          </ul>
  )
}
