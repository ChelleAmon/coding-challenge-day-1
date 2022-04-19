function getSum( a,b ){
    //   return integersFrom(a,b)
      let arr = []
      
      for(let i = a; i <= b; i++){
        arr.push(i)
      }

      return arr.reduce((a,b) => a + b, 0)
 }

 console.log(getSum(0,3))
 console.log(getSum(-1,2))
 