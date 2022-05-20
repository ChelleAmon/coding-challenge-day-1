// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
// For example:
// a = 1
// b = 4
// --> [1, 2, 3, 4]



function returnArray(a,b){
 return (a > b) ? "Not Valid" : createArray(a,b)
}


function createArray(a, b){
    return [...Array(b - a + 1).keys()].map(num => num + a)
}


console.log(returnArray(1, 4))
console.log(returnArray(20, 25))
console.log(returnArray(28, 25))