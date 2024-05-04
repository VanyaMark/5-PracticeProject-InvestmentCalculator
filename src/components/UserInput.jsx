import React from 'react';
import { useState, useEffect } from 'react';

const UserInput = ({initialInvestmentData}) => {
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
    <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="initialInvestment">Initial Investment</label>
                <input type="number" id="initialInvestment" name="initialInvestment" value={investmentValue.initialInvestment} onChange={handleInvestmentChange} required></input>
            </p>
            <p>
                <label htmlFor="annualInvestment">Annual Investment</label>
                <input type="number" id="annualInvestment" name="annualInvestment" value={investmentValue.annualInvestment} onChange={handleInvestmentChange} required></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="expectedReturn">Expected Return</label>
                <input type="number" id="expectedReturn" name="expectedReturn" value={investmentValue.expectedReturn} onChange={handleInvestmentChange} required></input>
            </p>
            <p>
                <label htmlFor="duration">Duration</label>
                <input type="number" id="duration" name="duration" onChange={handleInvestmentChange} value={investmentValue.duration} required></input>
            </p>
        </div>
    </section>
  )
}

export default UserInput