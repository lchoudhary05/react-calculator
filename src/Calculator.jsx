import React from 'react'

function Calculator(props){
    var {num1,num2,oper} = props
    var result = NaN
    switch(oper){
        case 'Addition':
            result = Number(num1)+Number(num2)
            break;
        case 'Subtraction':
            result = num1-num2
            break;
        case 'Multiplication':
            result = num1*num2
            break;
        case 'Division':
            if (Number(num2) === 0)
                return(<p>The divisor should not be 0</p>)          
            // result = Math.round(num1/num2).toFixed(2)
            result = parseFloat(num1/num2).toFixed(2)
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