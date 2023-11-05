// @ts-nocheck

import { useReducer } from 'react'
import {
  calculatorReducer,
  CalculatorAction,
} from '../../reducer/calculatorReducer'

const Calculator = () => {
  const [calculatorState, dispatch] = useReducer(calculatorReducer, {
    value1: 0,
    value2: 0,
    result: 0,
  })

  const handleOperation = (type: CalculatorAction) => {
    dispatch({
      type,
      value1: parseFloat(calculatorState.value1),
      value2: parseFloat(calculatorState.value2),
    })
  }

  const clearInputs = () => {
    dispatch({ type: 'CLEAR_INPUTS' })
    dispatch({ type: 'CLEAR_RESULT' })
  }

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <input
          type="number"
          value={calculatorState.value1}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_VALUE1', value: e.target.value })
          }
        />
        <input
          type="number"
          value={calculatorState.value2}
          onChange={(e) =>
            dispatch({ type: 'UPDATE_VALUE2', value: e.target.value })
          }
        />
      </div>
      <div>
        <button onClick={() => handleOperation('ADD')}>+</button>
        <button onClick={() => handleOperation('SUBTRACT')}>-</button>
        <button onClick={() => handleOperation('MULTIPLY')}>*</button>
        <button onClick={() => handleOperation('DIVIDE')}>/</button>
      </div>
      <button onClick={clearInputs}>Clear Inputs</button>
      <p>Result: {calculatorState.result}</p>
    </div>
  )
}

export default Calculator
