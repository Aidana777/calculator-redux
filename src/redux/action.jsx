
import { types } from "./types";


export function incrementPlus() {
    return {
        type: 'PLUS',
        payload: {
          numOne: num_1,
          numTwo: num_2,
        },
    }
}
export function decrementMINUS() {
    return {
        type: 'MINUS',
        payload: {
          numOne: num_1,
          numTwo: num_2,
        },    }
}
export function CalculatorMULTIPLIED() {
    return {
        type: 'MULTIPLIED',
      payload: {
        numOne: num_1,
        numTwo: num_2,
      }
    }
}

export function CalculatorDIVIDED() {
    return {
        type: 'DIVIDED',
        payload: {
          numOne: num_1,
          numTwo: num_2,
        },
    }
}
