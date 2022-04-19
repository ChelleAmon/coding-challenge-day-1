
// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.


function maxSequence(arr){
    let arrSum = [];
    let subArrs = [];

    for(let i = 0; i < arr.length; i++){
        let sum = 0;

        for(let j = arr.length; j > i; j--){
            let arr1 = arr.slice(i, j)
            sum = arr1.reduce((acc, cur) => acc + cur)
            subArrs.push(arr1)
            arrSum.push(sum)
        }
    }
    let i = arrSum.findIndex((i)=> i === Math.max(...arrSum))
    console.log(subArrs[i])
}

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
maxSequence([1,2,4])