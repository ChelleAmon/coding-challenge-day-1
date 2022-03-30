// _Y__ou are given a 2D array matrix of 0s and 1s and your task is to find the area of the largest rectangle which can be placed on top of a group of adjacent 1s.
// Example input
// matrix = 
// [
//   [1,0,1,1,1],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
//   [0,1,1,0,1],
//  ]
// Output
// 6


// function areaOfRectangle(){

// }


function checkLength(matrix){
    let len = 0;

    for (let i = 0; i < matrix.length; i++){
        if (matrix[i].length < matrix[i+ 1].length){
            len = matrix[i].length
        }else if (matrix[i].length > matrix[i + 1].length){
            len = matrix[i + 1].length
        // }else{
        //     continue;
        }
    }
    console.log(len);
}

checkLength([[1,0,1,1,1],[0,1,1,0,1],[0,1,1,0,1],[0,1,1,0,1]])