function calculator (number1,number2, operator) {
    
    switch(operator){ 
        case '+' :
            console.log (`${number1 + number2} = ${number1 + number2}`);
            break;
            case '-':
                console.log(` ${number1 - number2} = ${number1 - number2}`);
                break;
                case '*':
                    console.log(` ${number1 * number2} = ${number1 * number2}`);
                    break;
                    case '/':
                        console.log(` ${number1 / number2} = ${number1 / number2}`)

            default:
                console.log ('error');
                break;
 }

}

calculator(5,5,'+');
calculator (5,5, '-')
calculator (5,5, '*')
calculator (5,5, '/');