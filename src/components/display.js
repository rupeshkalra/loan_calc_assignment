import React from "react"

function Display(props){
    
    if(props.userValues.display){ 
    return(   
        <div>
            <h4>
                Loan amount: {props.userValues.amount} <br /> 
                Interest:{props.userValues.interest} <br /> 
                Years to repay: {props.userValues.months}
            </h4>
            <div>
                <label>Monthly Payment:</label>
                <h4>{props.userValues.EMI} </h4>
            </div>
            <div>
                <label>Total Payment: </label>
                <h4>{props.userValues.totalPayment} </h4>
            </div>
            <div>
                <label>Total Interest:</label>
                <h4>{props.userValues.totalInterest}</h4>
            </div>
        </div>
    );}
    else{
        return(
            <h5></h5>
        );
    }
}

export default Display;