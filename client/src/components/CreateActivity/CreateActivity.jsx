import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getActivities, getAllCountries, createActivity } from "../../actions/index";
import { useDispatch, useSelector } from "react-redux";
import "./CreateActivity.css"



export default function CreateActivity() {

  function validate(input){
    let errors = {}

    if(!input.name){
      errors.name = "Activity name required"
    }else if(!input.duration || input.duration === 0 || input.duration === Number("")){
      errors.duration = "Activity duration required"
    }else if(!input.season){
      errors.season = "Season of the required activity"
    }else if(!input.difficulty){
      errors.difficulty = "Degree of difficulty required"
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
        <button>Back Home</button>
      </Link>
      <h1>¡Create an activity!</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div >
          <p>Name: </p>
          <input class="field" type="text" value={input.name} name="name" onChange={(e)=>handleChange(e)}/>
        </div>
        <div>
        <p>Difficulty: </p>
          <label>1<input class="field" type="radio" value="1" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>2<input class="field" type="radio" value="2" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>3<input class="field" type="radio" value="3" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>4<input class="field" type="radio" value="4" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          <label>5<input class="field" type="radio" value="5" name="difficulty" onChange={(e)=>handleChange(e)}/></label>
          {errors.name&&(
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <p>Duration: </p>
          <input className="field" type="number" value={input.duration} name="duration" onChange={(e)=>handleChange(e)}/>
          {errors.name&&(
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <p>Seasons: </p>
          <label><input type="radio" value="Summer" name="season" onChange={(e)=>handleChange(e)}/>Summer</label>
          <label><input type="radio" value="Autumn" name="season" onChange={(e)=>handleChange(e)}/>Autumn</label>
          <label><input type="radio" value="Winter" name="season" onChange={(e)=>handleChange(e)}/>Winter</label>
          <label><input type="radio" value="Spring" name="season" onChange={(e)=>handleChange(e)}/>Spring</label>
          {errors.name&&(
            <p>{errors.name}</p>
          )}
        </div>
        <div>
          <p>Countries: </p>
          <select name="" id="" onChange={(e)=>handleSelectCountry(e)}>
            {allCountries.map((country)=>(
              <option value={country.name}>{country.name}</option>))}
          </select>
          {input.countries.map(el => el + ", ")}
        </div>
        <div>
          <button type="submit"> Finish creating! </button>
        </div>
      </form>
      {input.countries.map((country)=>
        <div>
          <p>{country}</p>
          <button onClick={()=> handleDelete(country)}>x</button>
        </div>
        
        
      )}
    </div>
    </div>
  );
}
