import React from "react";
import { getActivities } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"
import style from "./Activities.css"

export default function GetActivities(){

    const dispatch = useDispatch()
    const allActivities = useSelector((state)=> state.activities)

    useEffect(()=>{
        dispatch(getActivities())
    },[dispatch])

    return(
        <div className={style.body}>
            <div className={style.maincointainer}>
            {
                allActivities.length?allActivities.map((activity, index)=>{
                    <div key={index} className={style.card}>
                        <p>Name: {activity.name}</p>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration: {activity.duration}</p>
                        <p>Season: {activity.season}</p>
                        <p>Countries: {activity.countries.map((country)=> country.name + " ")}
                        </p>
                        {/* <button onClick={(e)=> handlerDelete(e, activity.id)}>x</button> */}
                    </div>
                }
                ) : "No hay actividad"
            }
            </div>
        </div>
    )
}