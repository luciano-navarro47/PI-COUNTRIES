import React from "react";
import { getAllActivities } from "../../actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react"

export default function GetActivities(){

    const dispatch = useDispatch()
    const allActivities = useSelector((state)=> state.activities)

    useEffect(()=>{
        dispatch(getAllActivities())
    },[dispatch])

    return(
        <div>
            {
                allActivities.length?allActivities.map((activity, index)=>{
                    <div>
                        <p>Name: {activity.name}</p>
                        <p>Difficulty: {activity.difficulty}</p>
                        <p>Duration: {activity.duration}</p>
                        <p>Season: {activity.season}</p>
                        <p>Countries: {activity.countries.map((country)=> country.name + " ")}</p>
                        {/* <button onClick={(e)=> handlerDelete(e, activity.id)}>x</button> */}
                    </div>
                }
                ) : "hola en activities"
            }
        </div>
    )
}