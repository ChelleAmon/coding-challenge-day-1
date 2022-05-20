// Challenge: Countdown timer for
// input is given in minutes


function timer(num){
    let now = new Date().getTime()
    let inSeconds = num * 60 * 1000
    let count = now - inSeconds

    console.log(count)
    // setTimeout(() => {

    // }, inSeconds)

}


timer(2)
