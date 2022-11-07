import { GET_ALL_COUNTRIES,} from "../actions/index.js"

const initialState = {
   countries : [],
}

const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_ALL_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            };
        
            
    }
 }


export default rootReducer;