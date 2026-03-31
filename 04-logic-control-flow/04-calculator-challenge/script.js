
function calculator(n1, n2, operator) {

    let result = 0;

    switch (operator) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;

        default:
            console.error(`Please Enter a valid operator!!! ${operator} is not Valid`);
            return
    }

    console.log(result);
    return result;
    
}


calculator(10, 20, '+');
calculator(10, 20, '-');
calculator(10, 20, '*');
calculator(10, 20, '/');
calculator(10, 20, '&');