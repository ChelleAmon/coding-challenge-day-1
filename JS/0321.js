function findSubstring(s){
    let k = [];
    let subs = [];

    if (s == ""){
        return [s, 0]
    } 

    for (let i = s.length; i > 0; i-- ){
        let substr = "";
        let t = "";
        let count = 0;

        substr = s.substring(0, i)
        subs.push(substr)

        for(let j = 0; j < s.length; j++){
            t += s[j]

            if (t === substr){
                t = "";
                count++;
            }else {
                 continue;
            }
        }

        k.push(count)
    }

    let finalIndex = k.findIndex((item) => item === Math.max(...k))

   console.log( [subs[finalIndex], k[finalIndex]])
    return [subs[finalIndex], k[finalIndex]]
}

findSubstring("abcabc")
findSubstring("ababab")
findSubstring("ababc")
findSubstring("abcde")
findSubstring("")



        // for (let j = s.length; j > 0; j--){
        //     let val = "";
        //     val = s.slice(0, j)
    
        //     console.log("val: ", val)
        //     console.log("substr: ", substr)

        //     count = (s.match(/(val)/) || []).length

        // }
        // k.push(count)