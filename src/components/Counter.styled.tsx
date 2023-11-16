import styled from "styled-components";

export const StyledCalculatorContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const StyledCalculator = styled.div`
  width: 10rem;
  padding: 0 0 0 1rem;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
`
export const StyledNumber = styled.button<{ primary?: boolean }>`
color: ${props => props.primary ? "#4b7d64" : "#5932e3"};
background-color: ${props => props.primary ? "#a6decc" : "#c8beeb"};
height: 2rem;
width: 2rem;
font-weight: bold
`
export const StyledNumberContainer = styled.div`
display: flex;
`
export const StyledCounterContainer = styled.div`
background: #e4ebed;
width: 10rem;
height: 10rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
`
export const StyledCounterInput = styled.h1`
background: #e4ebed;
padding: 0 0 0 10px;
font-size: 24px;
color: #1e1f1e
`