import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../actions";

export default function Paginated({ countriesPerPage, allCountries, setActive, active}){
  const pageNumbers = [];

  const currentPage = useSelector((state)=> state.actualPage)
  const dispatch = useDispatch()

  function handlerClick(event, number){
    event.preventDefault()
    dispatch(setCurrentPage(number))
    setActive({
      [event.target.name]: true
    })
  }


  for (let i = 0; i <= Math.ceil(allCountries / countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }
  

  return (
          <ul>
             {
             pageNumbers?.map((number) => {
          return (
            <a key={number}> <button value={currentPage} onClick={(number) => handlerClick(number)}> {number} </button> </a>
            )
          })
        }
          </ul>
  )
}
