// Input: Your program should read lines of text from standard input. Each line contains a single positive integer, N.
// Output: For each input N, print 1 to standard output if N is a self-describing number, Otherwise print 0
// E.g:- 2020 is a self-describing number : Position 0 has value 2 and there are two 0s in the number. Position 1 has value 0 because there are no 1s in the number. Position 2 has value 2 and there are two 2s. And the position 3 has value 0 and there are zero 3’s
// Test 1:- Input : 2020,  Expected output:- 1
// Test 2:- Input : 22,  Expected output:- 0

// wrong function!!!
function selfDescribe(num){
    const input = num.toString().split('').map(Number)
    const keys = [...Array(input.length).keys()]
    let arr = []

    for(let i = 0;i < input.length; i++){
        let output = 0
        for(let k = 0; k < keys.length; k++){
            if (input[i] !== keys[k]){
                arr.push(output)
                break;
            }else{
                output = 1
                arr.push(output)
                break;
            }
        }
    }
    console.log(arr.find(i => i == 0 ? 0 : 1))
}

selfDescribe(2020)
selfDescribe(1210)
selfDescribe(22)