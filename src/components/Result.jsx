import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const Result = ({ investmentValue }) => {
    let {initialInvestment, annualInvestment, expectedReturn, duration} = investmentValue;
    const finalInvestmentResultArr = calculateInvestmentResults(investmentValue)

    console.log(finalInvestmentResultArr)
  return (
    <table id='result'>
         <thead>
    <tr>
      <th>Year</th>
      <th>Investment Value</th>
      <th>Interest(Year)</th>
      <th>Total Interest</th>
      <th>Invested Capital</th>
    </tr>
  </thead>
      <tbody>
        {finalInvestmentResultArr.map(yearData => {
            const totalInterest = yearData.valueEndOfYear - yearData.year*yearData.annualInvestment - initialInvestment;
            const investedCapital = initialInvestment + yearData.year*yearData.annualInvestment;

            return (
            <tr key={yearData.year}>
                <td>{yearData.year}</td>
                <td>{formatter.format(yearData.valueEndOfYear)}</td>
                <td>{formatter.format(yearData.interest)}</td>
                <td>{formatter.format(totalInterest)}</td>
                <td>{formatter.format(investedCapital)}</td>
            </tr>
        )})}
          {/* <tr>
            {finalInvestmentResultArr.map(yearData => {
                <td key={`${yearData.year}`} >{`${yearData.year}`}</td>
            })}
            
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>Germany</td>
            <td>Germany</td>
          </tr> */}
      </tbody>
    </table>
  );
};

export default Result;
