// You have an 8-wind compass, like this:

// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

// Examples

// "S",  180  -->  "N"
// "SE", -45  -->  "E"
// "W",  495  -->  "NE"


function compass(direction, degree){

    let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
    let turns = degree / 45
    let abs = Math.abs(turns)
    let modifiedDir = directions.splice(directions.indexOf(direction), directions.length).concat(directions)
    

    if (turns > 0){ // means degree is negative
        let counterclockwise = [];

        for(let i = 0; i <= abs; i++){
            modifiedDir.reverse()
            console.log(modifiedDir)
        }
    }


}




// console.log(compass("S", 180))  // "N"
console.log(compass("SE", -45)) // 'E'
// console.log(compass("W", 495))  // "NE"