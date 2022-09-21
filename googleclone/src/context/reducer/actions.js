import { SET_SEARCH_TERM } from "./action.types"

export const search=(inputterm)=>{
    return ({type:SET_SEARCH_TERM,payload:inputterm});
}