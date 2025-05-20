import React, { useState } from 'react'
import Calculator from './Calculator'

function App(){
  const[value1, SetValue1] = useState()
  const[value2, SetValue2] = useState()
  const[operation, setOperation] = useState()
  const[res,setres]= useState(false)

  const handleValue1Change = (e) =>{
    SetValue1(e.target.value)
  }
  function handleValue2Change(e){
    SetValue2(e.target.value)
  }

  const handleOperationchange = (e)=>{
    setOperation(e.target.value)
    setres(true)
  }


  return(
    <>
      <h1 style={{textAlign:"center"}}>Smart Calculator</h1>
      <label htmlFor="value1">First value</label>
      <input type = 'number' id = "value1" placeholder='Enter here' value={value1} onChange={handleValue1Change} />
      <label htmlFor="value1">Second value</label>
      <input type ='number' id = "value1" placeholder='Enter here' value={value2} onChange={handleValue2Change}/>
      <br/>
      <label htmlFor="operation">Select the operation</label>
      <select type= "select" id = 'operation' onChange={handleOperationchange} >
        <option value="+">Addition</option>
        <option value="-">Subtraction</option>
        <option value="*">Multiplication</option>
        <option value="/">Division</option>
      </select>
      {res &&<Calculator num1={value1} num2={value2} oper={operation}/>}
    </>
  )
}

export default App