import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Paginated.css";
import { setCurrentPage } from "../../actions";

export default function Paginated({ countriesPerPage, allCountries, setActive, active}) {
  const pageNumbers = [];


  const dispatch = useDispatch();
  const currentPage = useSelector((state)=> state.actualPage)

  function handlerClick(event, n) {
    event.preventDefault();
    dispatch(setCurrentPage(n))
    setActive({ [event.target.name]: true }) 
    // console.log(setActive({ [event.target.name]: true }) )
    }
  

  for (let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div className="conteinerPagi">
      <div className="paginacion">
        {pageNumbers?.map((n) => {
          return (
            <a key={n}name={n} value={currentPage} onClick={(event)=> 
              handlerClick(event,n)}  className="button">{n}</a>
          );
        })}
      </div>
    </div>
  );
}
