import { useState } from "react"
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
  const [investmentData, setInvestmentData] = useState({});

  
  return (
    <div>
      <UserInput initialInvestmentData={initialInvestmentData} />
      <Result />
    </div>
  )
}

export default App
