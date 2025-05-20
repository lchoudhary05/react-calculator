import React from 'react'

function Calculator(props){
    var {num1,num2,oper} = props
    var result = NaN
    switch(oper){
        case '+':
            result = num1+num2
            break;
        case '-':
            result = num1-num2
            break;
        case '*':
            result = num1*num2
            break;
        case '/':
            result = num1/num2
            break;
        default:
            result =NaN
            break;
        
        
    }
    console.log(props)
    return(
        <>
            <p>The {oper} of {num1} and {num2} is {result}</p>
        </>
    )
}
export default Calculator