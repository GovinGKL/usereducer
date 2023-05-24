import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useReducer } from 'react'

const countReducer = (state , action) => {
  if(action.type === "INCREMENT"){
    return {count : state.count + 1}
  }
  else if(action.type === "DECREMENT"){
    return {count : state.count - 1}
  }
  else {
    return state
  }
}

const App = () => {
  // Initialize the state
  const initailState = {count : 0}

   // useReducer hook to manage state
  const [state , dispatch] = useReducer(countReducer , initailState)

   // useRef to store previous count
  const ref = useRef(0)

  
  // useEffect hook to update ref.current when state.count changes
  useEffect(()=>{
    ref.current = state.count
  },[state.count])

  return (
    <div>
      <h3>Current count : {state.count}</h3>
      <h3>Previous count : {ref.current}</h3>
      <button onClick={() => dispatch({type : "INCREMENT"})}>INCREMENT</button>
      <button onClick={() => dispatch({type : "DECREMENT"})}>DECREMENT</button>
    </div>
  )
}

export default App


