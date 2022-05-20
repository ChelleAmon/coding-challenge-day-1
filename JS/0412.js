// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


function moveZeros(arr){
    let zeros = arr.filter(i => i === 0);
    let nonZeros = arr.filter(i => i !== 0)

    console.log(nonZeros.concat(zeros))
    console.log('--------------')
}


moveZeros( [false,1,0,1,2,0,1,3,"a"])
moveZeros([0,5,"b",1,2,0,"v",3,"a", 0])




function moveZeros1(array){
    let mySymbol = Symbol()  
    let len = array.length

    for(let i = 0;i < len; i++){
        if (array[i] === 0){
            array.splice(i, 1, mySymbol)
            array.push(0)
        }
    }
    let output = array.filter(i => i !== mySymbol)

    console.log(output)
    console.log('-------------')
}

moveZeros1( [false,1,0,1,2,0,1,3,"a"])
moveZeros1( ['', '-', 0,0,5,"b",1,2,0,"v",3,"a", 0,0])