const { execPath } = require("process");

class Result{
    constructor(value1, value2, value3, primary){
        this.value1 = value1;
        this.value2 = value2;
        this.value3 = value3;
        this.primary = primary;
    }

    toArray(){
        return [this.value1, this.value2, this.value3];
    }
}

const results = {};

results.vinson = new Result(5,7,6, 5);
results.bryce = new Result(5,1,9, 5);
results.chazz = new Result(4,6,9,4);
results.angel = new Result(3,5,7,5);
results.sirisha = new Result(9,2,6,2);
results.lee = new Result(6,7,8,6);
results.gichelle = new Result(6,1,9,1);
results.aman = new Result(7,6,1,6);
results.mekdes = new Result(7,9,6,7);
results.saba = new Result(2,7,1, 1);

function arrayIntersection(array1, array2) {
    let answer = [];
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            answer.push(array1[i]);
        }
    }
    return answer;
}

function findIntersectionOfEachKey(name) {
    let result = [];
    Object.keys(results).forEach(key => {
        if (key !== name) {
           let intersection = arrayIntersection(results[name].toArray(), results[key].toArray());
            result.push({
                name: key,
                intersection,
                primary: results[key].primary
            })
        }
    });
    return result.sort((person1, person2) => person2.intersection.length - person1.intersection.length);
}

console.log(findIntersectionOfEachKey('vinson'));

