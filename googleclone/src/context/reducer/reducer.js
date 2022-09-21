import { SET_SEARCH_TERM } from "./action.types"

export const initialState={
    inputterm:null
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case SET_SEARCH_TERM:{
            return {
                ...state,
                inputterm:payload
            }
        }
        default:{
            return state;
        }
    }
}

