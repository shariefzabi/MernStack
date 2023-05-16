import { ActionTypes } from "../constants/actionTypes"

const initialState ={
    products:[]
    
}
export const productReducer =(state =initialState,{type,payload})=>{
    console.log("came")
    console.log(type);
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
            
        default:
            return state
    }
}

export const selectedProductreducer =(state={},{type,payload})=>{
    console.log("here as wel")
    console.log(type,ActionTypes.SELECTED_PRODUCT )
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload};
            
        default:
            return state
    }
}


