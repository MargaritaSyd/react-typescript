import React, { useState } from "react";
import {
  StyledNumber,
  StyledNumberContainer,
  StyledCounterContainer,
  StyledCounterInput,
  StyledCalculatorContainer,
  StyledCalculator,
} from "./Counter.styled";

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
    console.log(numberClicked, mathSymbol)
    const result = mathSymbol === '+' ? count + numberClicked! : count - numberClicked!
    if(numberClicked !== undefined){
      setCount(result);
      setMathSymbol('');
      setNumberClicked(undefined)
    }
  }
  return (
    <StyledCalculatorContainer>
      <StyledCalculator>
        <StyledCounterInput>{ count } {mathSymbol} {numberClicked} </StyledCounterInput>
        <StyledCounterContainer>
          <StyledNumberContainer>
            <StyledNumber primary onClick={ () => handleClick(7) }>7</StyledNumber>
            <StyledNumber primary onClick={ () => handleClick(8) }>8</StyledNumber>
            <StyledNumber primary onClick={ () => handleClick(9) }>9</StyledNumber>
            <StyledNumber onClick={ () => handleReset() }>C</StyledNumber>
          </StyledNumberContainer>
          <StyledNumberContainer>
            <StyledNumber primary onClick={ () => handleClick(4) }>4</StyledNumber>
            <StyledNumber primary onClick={ () => handleClick(5) }>5</StyledNumber>
            <StyledNumber primary onClick={ () => handleClick(6) }>6</StyledNumber>
            <StyledNumber onClick={ () => handleMathSymbol('+') }>+</StyledNumber>
          </StyledNumberContainer>
          <StyledNumberContainer>
            <StyledNumber primary onClick={ () => handleClick(1) }>1</StyledNumber>
            <StyledNumber primary onClick={ () => handleClick(2) }>2</StyledNumber>
            <StyledNumber primary onClick={ () => handleClick(3) }>3</StyledNumber>
            <StyledNumber onClick={ () => handleMathSymbol('-') }>-</StyledNumber>
          </StyledNumberContainer>
          <StyledNumberContainer>
            <StyledNumber disabled> </StyledNumber>
            <StyledNumber onClick={ () => handleClick(0) }>0</StyledNumber>
            <StyledNumber disabled> </StyledNumber>
            <StyledNumber onClick={ () => handleResult() }>=</StyledNumber>
          </StyledNumberContainer>
        </StyledCounterContainer>
      </StyledCalculator>
    </StyledCalculatorContainer>
  )
}

export default Counter