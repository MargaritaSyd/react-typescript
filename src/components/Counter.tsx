import React, { useState } from "react";

interface CounterProps {
  initialValue: number
}

const Counter = ({ initialValue}:CounterProps) => {
  const [count, setCount] = useState(initialValue);
  const [numberClicked, setNumberClicked] = useState<number|undefined>()
  const [mathSymbol, setMathSymbol] = useState<string>('')

  const handleClick = (value:number) => {
    setNumberClicked(value)
    if(mathSymbol === '') setMathSymbol('+')

  }
  const handleMathSymbol = (symbol:string) => {
    setMathSymbol(symbol)
  }
  const handleReset = () => {
    setCount(0)
    setNumberClicked(undefined)
  }

  const handleResult = () => {
    const result = mathSymbol === '+' ? count + numberClicked! : count - numberClicked!
    if(numberClicked){
      setCount(result);
      setMathSymbol('');
      setNumberClicked(undefined)
    }
  }
  return (
    <>
      <h1>{ count } {mathSymbol} {numberClicked} </h1>
      <div>
        <button onClick={ () => handleClick(7) }>7</button>
        <button onClick={ () => handleClick(8) }>8</button>
        <button onClick={ () => handleClick(9) }>9</button>
        <button onClick={ () => handleReset() }>C</button>
      </div>
      <div>
        <button onClick={ () => handleClick(4) }>4</button>
        <button onClick={ () => handleClick(5) }>5</button>
        <button onClick={ () => handleClick(6) }>6</button>
        <button onClick={ () => handleMathSymbol('+') }>+</button>
      </div>
      <div>
        <button onClick={ () => handleClick(1) }>1</button>
        <button onClick={ () => handleClick(2) }>2</button>
        <button onClick={ () => handleClick(3) }>3</button>
        <button onClick={ () => handleMathSymbol('-') }>-</button>
      </div>
      <div>
        <button onClick={ () => {} }> </button>
        <button onClick={ () => handleClick(0) }>0</button>
        <button onClick={ () => {} }> </button>
        <button onClick={ () => handleResult() }>=</button>
      </div>
    </>
  )
}

export default Counter