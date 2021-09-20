import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement } from './components/Store'

function App(props){

  const count=useSelector(state => state)
  const dispatch=useDispatch()

  return(
    <div style={{marginLeft:"5%",marginTop:"5%"}}>
      <h2>Counter:{count}</h2>
      <button
      onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  )
}
export default App;