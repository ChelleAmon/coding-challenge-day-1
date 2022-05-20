// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// 'abc' =>  ['ab', 'c_']
// 'abcdef' => ['ab', 'cd', 'ef']


function splitByPair(callback, str){
    let output = []
    let len = str.length
    if(len % 2 !== 0){
       output = str.split('')
       output.push('_')
       output = output.join('')
    }else {
        output = str
    }

    callback(output)
    console.log(callback(output))
   
}

function iterate(output){
    let i = 0;
    let arr = []
    let substr = ''

    while(i <= output.length){
        if (substr.length === 2) {
            arr.push(substr)
            substr = ""
            substr += output[i]
        }else if (substr.length < 2 || substr.length >= 0) {
            substr += output[i]
        }     
        i++   
    }
    return arr;
}


splitByPair(iterate, 'abc')
splitByPair(iterate, 'abcd')
splitByPair(iterate, 'abcdefghijk')

