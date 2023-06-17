import { ADDITION,SUBTRACTION } from "./ActionType";

const initialState={    
    counter:1
}

export const rootReducer=(state=initialState,action)=>{
    switch (action.type){
        case ADDITION : 
            return {
                ...state,
                counter:state.counter +1
            }

        case SUBTRACTION :
            return {
                ...state,
                counter:state.counter -1
            }
        
        default :
            return state
    }
}