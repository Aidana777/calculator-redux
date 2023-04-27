import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CalculatorDIVIDED, CalculatorMULTIPLIED, decrementMINUS, incrementPlus } from '../redux/action'

const Calculator = () => {
  const { answer } = useSelector((state) => state.CalculatorReducer);
  const dispatch = useDispatch(0);
  const [num_1, setNum_1] = useState();
  const [num_2, setNum_2] = useState();

  const increment = () => {
    dispatch(incrementPlus(num_1, num_2));
  };

  const decrement = () => {
    dispatch(decrementMINUS(num_1, num_2));
  };

  const multiplied = () => {
    dispatch(CalculatorMULTIPLIED(num_1, num_2))
  };

  const divided = () => {
    dispatch(CalculatorDIVIDED(num_1, num_2));
  };
  return (
    <div className="child">
      <p>{answer}</p>
      <input
        placeholder="Введите первое число"
        type="number"
        onChange={(e) => setNum_1(e.target.value)}
      />
      <input
        placeholder="Введите второе число"
        type="number"
        onChange={(e) => setNum_2(e.target.value)}
      />
      <div className="bnts_block">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={multiplied}>*</button>
        <button onClick={divided}>:</button>
      </div>
    </div>
  )
}

export default Calculator