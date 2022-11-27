import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getActivities, getAllCountries, createActivity } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./CreateActivity.css"



export default function CreateActivity() {
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
    dispatch(getAllCountries());
  }, [dispatch]);

/////////////////////////////////////

function validate(input){
  let errors = {};

  if(!input.name){
    errors.name = "Name is required"
  } else if(!input.name.match(/^[a-zA-Z\s]+$/)){
    errors.name = "Only Letters, please!"
  } else if(input.name < 3){
      errors.name = "The activity name must contain at least 3 characters"
  }else if(input.name.length > 30){
    errors.name = "The name is too long!"
  }else if(!input.duration || input.duration === 0){
    errors.name = "Activity duration required"
  }else if(input.duration < 20 || input.duration > 120){
    errors.name = "The activity cannot last less than 20 minutes or more than 120 minutes"
  }else if(!input.season){
    errors.name = "Season is required"
  }else if(!input.difficulty){
    errors.name = "Difficulty is required"
  }
  return errors;
}

function handleChange(e){
  setInput({
    ...input,
    [e.target.name] : e.target.value
  })
  setErrors(validate({
    ...input,
    [e.target.name] : e.target.value
  }))
  
}

  function handleSelectCountry(e){
    if(input.countries?.includes(e.target.value)){
      alert("Country already in the list");
    }else{
      setInput({
        ...input,
        countries: [...input.countries, e.target.value]
      })
    }
   
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(createActivity(input))
    alert("¡Activity created successfully!")
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
    <div className="backGround">
      <div className="formulario">
      <Link to="/home">
        <button className="button-49">Back Home</button>
      </Link>
      <h1>¡Create an activity!</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className="pes">
          <p>Name: </p>
          <input className="field" type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}/>
          {errors.name&&(<p>{errors.name}</p>)
          }
        </div>
        <div className="pes">
        <p>Difficulty: </p>
          <label>1<input className="field" type="radio" value="1" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>2<input className="field" type="radio" value="2" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>3<input className="field" type="radio" value="3" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>4<input className="field" type="radio" value="4" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>5<input className="field" type="radio" value="5" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          {errors.name&&(<p>{errors.name}</p>)}
        </div>
        <div className="pes">
          <p>Duration: </p>
          <input className="field" type="number" value={input.duration} name="duration" onChange={(e)=>handleChange(e)}/>
          {errors.name&&(<p>{errors.name}</p>)}
        </div>
        <div className="pes">
          <p className="seasons">Seasons: </p>
          <label><input type="radio" value="Summer" name="season" onChange={(e)=>handleChange(e)}/>Summer</label>
          <label><input type="radio" value="Autumn" name="season" onChange={(e)=>handleChange(e)}/>Autumn</label>
          <label><input type="radio" value="Winter" name="season" onChange={(e)=>handleChange(e)}/>Winter</label>
          <label><input type="radio" value="Spring" name="season" onChange={(e)=>handleChange(e)}/>Spring</label>
          {errors.name&&(<p>{errors.name}</p>)}
        </div>
        <div className="pes">
          <p>Countries: </p>
          <select defaultValue="default" onChange={(e)=>handleSelectCountry(e)}>
            <option hidden value='default'>Select countries...</option>
            {allCountries.map((country, idx)=>(
              <option key={idx} value={country.name}>{country.name}</option>))}
          </select>
        </div>
        <button className="button-8" type="submit" disabled={!input.countries.length}> FINISH CREATING! </button>
      </form>
      <div>
      {input.countries.map((country, idx)=>
        <div key={idx} className="list">
          <div>
          {country}
          </div>
          <button className="buttonDelete" onClick={()=> handleDelete(country)}>x</button>
        </div>
      )}
      </div>
    </div>
    </div>
  );
}
