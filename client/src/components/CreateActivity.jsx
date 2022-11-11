import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getActivities, getAllCountries, createActivity } from "../actions/index";
import { useDispatch, useSelector } from "react-redux";



export default function CreateActivity() {

  function validate(input){
    let errors = {}

    if(!input.name){
      errors.name = "Se requiere el nombre de la actividad"
    }else if(!input.duration || input.duration === 0){
      errors.duration = "Ingresá la duración de la actividad"
    }else if(!input.season){
      errors.season = "Ingresá la temporada en la que se realiza dicha actividad"
    }else if(!input.difficulty){
      errors.difficulty = "Ingresá el grado de dificultad que debería tener"
    }
    return errors;
}

  const dispatch = useDispatch();
  const history = useHistory()
  const allCountries = useSelector((state) => state.countries);

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    countries: [],
    allCountries: []
  });

  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  function handleChange(e){
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
    setErrors(validate({
      ...input,
      [e.target.name] : e.target.value
    }))
    // console.log(input)
  }

  function handleSelectCountry(e){
    setInput({
      ...input,
      countries: [...input.countries, e.target.value]
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(input)
    dispatch(createActivity(input))
    alert("¡Actividad creada con éxito!")
    setInput({
    name: "",
    difficulty: 0,
    duration: "",
    season: "",
    countries: [],
    allCountries: []
    })
    history.push("/home")
  }

  function handleDelete(element){
    setInput({
      ...input,
      countries: input.countries.filter((country)=> country !== element)
    })
  }

  return (
    <div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <h1>Creá una actividad!</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <label>Nombre: </label>
          <input type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}/>
          {errors.name&&(
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <label>Dificultad: </label>
          <label><input type="radio" value="1" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label><input type="radio" value="2" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label><input type="radio" value="3" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label><input type="radio" value="4" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label><input type="radio" value="5" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          {errors.name&&(
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <label>Duración: </label>
          <input type="number" value={input.duration} name="duration" onChange={(e)=>handleChange(e)}/>
          {errors.name&&(
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <label>Temporadas: </label>
          <label><input type="radio" value="Summer" name="season" onChange={(e)=>handleChange(e)}/>Summer</label>
          <label><input type="radio" value="Autumn" name="season" onChange={(e)=>handleChange(e)}/>Autumn</label>
          <label><input type="radio" value="Winter" name="season" onChange={(e)=>handleChange(e)}/>Winter</label>
          <label><input type="radio" value="Spring" name="season" onChange={(e)=>handleChange(e)}/>Spring</label>
          {errors.name&&(
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <label>Paises: </label>
          <select name="" id="" onChange={(e)=>handleSelectCountry(e)}>
            {allCountries.map((country)=>(
              <option value={country.name}>{country.name}</option>))}
          </select>
          <ul><li>{input.countries.map(el => el + ", ")}</li></ul>
          <button type="submit">Terminar de crear</button>
        </div>
      </form>
      {input.countries.map((country)=>
        <div>
          <p>{country}</p>
          <button onClick={()=> handleDelete(country)}>x</button>
        </div>
      )}
    </div>
  );
}
