export type CalculatorState = {
  value1: string
  value2: string
  result: number
}

export type CalculatorAction =
  | 'ADD'
  | 'SUBTRACT'
  | 'MULTIPLY'
  | 'DIVIDE'
  | 'UPDATE_VALUE1'
  | 'UPDATE_VALUE2'
  | 'CLEAR_INPUTS'
  | 'CLEAR_RESULT'

const calculatorReducer = (
  state: CalculatorState,
  action: { type: CalculatorAction; value: string }
): CalculatorState => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        result: parseFloat(state.value1) + parseFloat(state.value2),
      }
    case 'SUBTRACT':
      return {
        ...state,
        result: parseFloat(state.value1) - parseFloat(state.value2),
      }
    case 'MULTIPLY':
      return {
        ...state,
        result: parseFloat(state.value1) * parseFloat(state.value2),
      }
    case 'DIVIDE':
      return {
        ...state,
        result: parseFloat(state.value1) / parseFloat(state.value2),
      }
    case 'UPDATE_VALUE1':
      return { ...state, value1: action.value }
    case 'UPDATE_VALUE2':
      return { ...state, value2: action.value }
    case 'CLEAR_INPUTS':
      return { ...state, value1: '', value2: '' }
    case 'CLEAR_RESULT':
      return { ...state, result: 0 }
    default:
      return state
  }
}

export { calculatorReducer }
