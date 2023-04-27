
import { types } from "./types";

export function CalculatorNumber(number) {
    return {
        type: types.calculator,
        payload: number
    }
}
