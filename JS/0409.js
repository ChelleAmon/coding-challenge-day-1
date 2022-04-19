// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));


function expression(number, callbackfn){
    if(!callbackfn){
        console.log('operation', typeof callbackfn)
        return number
    }else {
        console.log('operation', typeof callbackfn)
        return callbackfn(number)    
    }
}

function times(x){
    return function(y){
        console.log('multiply')
        console.log('x: ', x)
        console.log('y: ', y)
        console.log(x * y)
    }
}

function five(operation){
    console.log(5)
    return expression(5, operation)
}

function seven(operation){
    console.log(7)
    return expression(7, operation)
}


seven(times(five()))