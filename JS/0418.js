// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100



//THIS IS A WRONG FUNCTION!
function validParenthesis(string){

    let obj = {}
    let len = split.length
    if(string[0] === ')' || string[string.length] === '('  || (string.length % 2 == 1)){
        return false
    }else {
        let split = string.split('')
        
        for(let i = 0; i < split.length; i++){
            if(split[i] === '('){
                obj[i] = '('
            }
        }

        // return split.filter(i => i ==="(").length === split.filter(i => i === ')').length
    }
}


console.log(validParenthesis(")(()))"))
console.log(validParenthesis("((()())"))
console.log(validParenthesis("(())((()())())"))
console.log(validParenthesis("(())(())()))"))
console.log(validParenthesis("(()))(()"))