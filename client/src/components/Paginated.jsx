import React from "react"

export default function Paginated({countriesPerPage, allCountries, paginated}){
const pageNumbers = []

    for(let i = 0 ; i <= Math.ceil(allCountries/countriesPerPage) ; i++){
        pageNumbers.push(i + 1)
    }

    return(
        <nav>
            <ul>
                { pageNumbers?.map((number)=>(
                    <li key={number}>
                        <a onClick={()=>paginated(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}