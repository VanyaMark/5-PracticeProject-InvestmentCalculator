import { useState, useEffect } from "react"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

import { calculateInvestmentResults, formatter } from "./util/investment"
const initialInvestmentData = {
  initialInvestment: 10000, 
  annualInvestment: 300, 
  expectedReturn: 5.5, 
  duration: 10
}

function App() {
  const [investmentValue, setInvestmentValue] = useState(initialInvestmentData);

  const investmentValueIsValid = investmentValue.duration > 0;

  const handleInvestmentChange = (event) => {
      setInvestmentValue(prevInvestmentValue => {
          return {...prevInvestmentValue,
                  [event.target.id]: Number(event.target.value)}
      })
      console.log(investmentValue)
  }

  
  return (
    <div>
      <UserInput investmentValue={investmentValue} handleInvestmentChange={handleInvestmentChange} />
      {!investmentValueIsValid && <p className='center'>Please, insert a duration greater than 0.</p>}
      {investmentValueIsValid && <Result investmentValue={investmentValue} />}
      
    </div>
  )
}

export default App
