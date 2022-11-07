import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector} from "react-redux"
import { getCountries } from "../actions"
import { Link } from "react-router-dom"

export default function Home(){

const dispatch = useDispatch()
const allCountries = useSelector((state) => state.countries)

useEffect(()=>{
    dispatch(getCountries())
},[])

function handleClick(e){
 e.preventDefault()
 dispatch(getCountries())
}

return(
    <div>
        <Link to ="/activities">Crear actividad</Link>
        <h1>Todos los paises al alcance de tu pantalla</h1>
        <button onClick={(e) =>handleClick(e)}>Recargar Paises</button>
        <div>
            <select >
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
            <select >
                <option value="All">Todos</option>
                <option value="Asia">Asia</option>
                <option value="North America">North America</option>
                <option value="Africa">Africa</option>
                <option value="Europe">Europa</option>
                <option value="Oceania">Oceania</option>
                <option value="South America">South America</option>
                <option value="Antarctica">Antartida</option>
            </select>
            <select ></select>
        </div>
    </div>
)
}