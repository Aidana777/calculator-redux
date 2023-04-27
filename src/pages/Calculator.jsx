import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CalculatorNumber } from '../redux/action'

const Calculator = () => {
  const [value,setValue]=useState(0)
  const dispatch=useDispatch()
  const {count}=useSelector(state=>state.CalculatorReducer)
  const addUserFn = () => {
    dispatch(CalculatorNumber(value))
}
  return (
    <div>
        <input type="number" onChange={(e)=>setValue(e.target.value)} />
        <input type="number" value={count === 0 ? count.map(user => <p>{user}</p>) : <p>Empty</p>}/>
       
        <button value="+" >+</button>
        <button value='-'>-</button>
        <button value='/'>/</button>
        <button value='*'>*</button>
    </div>
  )
}

export default Calculator