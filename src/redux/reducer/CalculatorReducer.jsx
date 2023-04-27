import { types } from "../types";

const initialState = {
  answer: 0,
};
export const CalculatorReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.PLUS:
      if (!action.payload.numOne || !action.payload.numTwo) {
        return { answer: "Введите число!" };
      }
      return {
        ...state,
        answer: +action.payload.numOne + +action.payload.numTwo,
      }


    case types.MINUS:

      if (!action.payload.numOne || !action.payload.numTwo) {
        return { answer: "Введите число!" };
      }
      return {
        ...state,
        answer: +action.payload.numOne - +action.payload.numTwo,
      }

    case types.MULTIPLIED:



      if (!action.payload.numOne || !action.payload.numTwo) {
        return { answer: "Введите число!" };
      }
      return {
        ...state,
        answer: +action.payload.numOne * +action.payload.numTwo,
      }
    case types.DIVIDED:
      if (!action.payload.numOne || !action.payload.numTwo) {
        return { answer: "Введите число!" };
      }
      return {
        ...state,
        answer: (+action.payload.numOne / +action.payload.numTwo).toFixed(1),
      }


    default: return state
  }

};


