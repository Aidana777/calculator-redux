
import { types } from "./types";


export function incrementPlus(num_1,num_2) {
    return {
        type: types.PLUS,
        payload: {
          numOne: num_1,
          numTwo: num_2,
        },
    }
}
export function decrementMINUS(num_1,num_2) {
    return {
        type: types.MINUS,
        payload: {
          numOne: num_1,
          numTwo: num_2,
        },    }
}
export function CalculatorMULTIPLIED(num_1,num_2) {
    return {
        type: types.MULTIPLIED,
      payload: {
        numOne: num_1,
        numTwo: num_2,
      }
    }
}

export function CalculatorDIVIDED(num_1,num_2) {
    return {
        type: types.DIVIDED,
        payload: {
          numOne: num_1,
          numTwo: num_2,
        },
    }
}
