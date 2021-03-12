import React from 'react'
import '../App.css'

function Input(props){
    
const handleInputChange = (event) =>
props.setUserValues({ ...props.userValues, [event.target.name]: event.target.value });

const handleSubmitValues = () => {
    const p = Number(props.userValues.amount);
    const r = Number(props.userValues.interest);
    const t = Number(props.userValues.months);
    
    let top = Math.pow((1+r),t);
    let bottom = top - 1;
    let ratio = top/bottom;
    
    let emi = (p * r * ratio).toFixed(3);
    let totalPayment = (p*(1+(r*t))).toFixed(3);
    let totalInterest = (p*r*t/(100*12)).toFixed(3);
    

    props.setUserValues({ ...props.userValues, display: true, "EMI":emi, "totalPayment": totalPayment
    ,"totalInterest": totalInterest });
  };
  
return(
        <div className="inpt-parent">
            <div className="inpt-val">
            <label>Amount:</label>
            <input type='text' name='amount' placeholder='Loan amount' value={props.userValues.amount}
            onChange={handleInputChange} />
            </div>

            <div className="inpt-val">
            <label>Interest:</label>
            <input type='text' name='interest' placeholder='Interest Rate' value={props.userValues.interest}
            onChange={handleInputChange} />
            </div>

            <div className="inpt-val">
            <label>Time :</label>
            <input type='text' name='months' placeholder='Time (in months)' value={props.userValues.months}
            onChange={handleInputChange} />
            </div>
            <button className="btn" onClick={handleSubmitValues}>Calculate</button>
        </div>
);
}

export default Input;