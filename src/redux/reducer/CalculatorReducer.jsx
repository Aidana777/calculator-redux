import { types } from "../types";

const initialState = {
  answer: 0,
};
export const CalculatorReducer = (state = initialState, action) => {

switch(action.type){
  case types.PLUS:
    return {
          ...state,
          answer: +action.payload.numOne + +action.payload.numTwo,
       }

    case types.MINUS:
 return {
          ...state,
          answer: +action.payload.numOne - +action.payload.numTwo,
       }

      case types.MULTIPLIED:
        return {
          ...state,
             answer: +action.payload.numOne * +action.payload.numTwo,
       }
       case types.DIVIDED:
        return {
               ...state,
              answer: (+action.payload.numOne / +action.payload.numTwo).toFixed(1),
            };
    default: return state
}

};
