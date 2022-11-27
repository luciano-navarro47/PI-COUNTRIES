import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./Paginated.module.css"
import { setCurrentPage } from "../../redux/actions";

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

    function handleNext(e){
      e.preventDefault()
      dispatch(setCurrentPage(currentPage + 1))
      setActive({ [currentPage+1]: true })
    }

    function handlePrev(e){
      e.preventDefault()
      dispatch(setCurrentPage(currentPage - 1))
      setActive({ [currentPage - 1]: true })
    }
  

  for (let i = 0; i < Math.ceil(allCountries/countriesPerPage); i++) {
    pageNumbers.push(i + 1);
  }

  return (
    <div>
        { <a><button className={style.prev} onClick={handlePrev} disabled={currentPage === 1}>prev</button></a> }
        {pageNumbers?.map((n) => {
          return (
            <a key={n}> <button name={n} value={currentPage} onClick={(event)=> 
              handlerClick(event,n)}
              className={active[n]? style.buttonactual : style.button}>{n}</button></a>
          );
        })}
        
        { <a className={style.nextDiv}><button className={style.next} onClick={handleNext} disabled={!allCountries || currentPage === Math.ceil(allCountries/countriesPerPage)}>next</button></a> }
        
    </div>
    
  );
}
