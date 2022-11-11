import React from "react";
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCountryDetail } from "../actions";
import { useEffect } from "react";

export default function Detail(props){
    console.log(props)

    const dispatch = useDispatch()
    const countryDetail = useSelector((state) => state.countryDetail)

    useEffect(()=>{
        dispatch(getCountryDetail(props.match.params.id))
    }, [dispatch])


    return(
        <div>
            {
                countryDetail.length > 0 ? <div>
                    <h1>{countryDetail[0].name}</h1>
                    
                </div>
                : "hola"
            }
        </div>
    )


}