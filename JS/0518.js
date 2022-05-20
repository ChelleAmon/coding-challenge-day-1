// You are given a car odometer which displays the miles traveled as an integer.
// The odometer has a defect, however: it proceeds from digit 3 to digit 5 always skipping the digit 4. This defect shows up in all positions (ones, tens, hundreds, etc).
// For example, if the odometer displays 15339 and the car travels another mile, the odometer changes to 15350 (instead of 15340).
// Your task is to calculate the real distance, according The number the odometer shows.
// Example
// For n = 13 the output should be 12(4 skipped).
// For n = 15 the output should be 13(4 and 14 skipped).
// For n = 2003 the output should be 1461.
// Input/Output
// [input] integer n
// The number the odometer shows.
// 1 <= n <= 999999999
// [output] an integer
// The real distance.


function getDistance(dist){
    const arr = [...Array(dist).keys()].map(i => i + 1)
    const four = /[4]/
    return  arr.filter((num, index) => !four.test(arr[index])).length
}


console.log(getDistance(13))
console.log(getDistance(15))
console.log(getDistance(2003))