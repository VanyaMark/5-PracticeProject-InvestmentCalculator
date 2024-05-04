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


  const handleInvestmentChange = (event) => {
      setInvestmentValue(prevInvestmentValue => {
          return {...prevInvestmentValue,
                  [event.target.id]: Number(event.target.value)}
      })
      console.log(investmentValue)
  }

  useEffect(() => {
      console.log(investmentValue);
  }, [investmentValue]);

  
  return (
    <div>
      <UserInput investmentValue={investmentValue} handleInvestmentChange={handleInvestmentChange} />
      <Result />
    </div>
  )
}

export default App
