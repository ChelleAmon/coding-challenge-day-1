// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
// The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
// It is much easier to understand with an example:
// * For seconds = 62, your function should return 
//     "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
//     "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
// Note that spaces are important.
// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
// A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
// Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
// A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
// A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.



function formatDuration(int){
    console.log('Value: ', int)
    console.log('**************************************************')

    console.log(getSeconds(int))
    console.log('--------------------------------------')
 
    console.log(getMinutes(int))   
    console.log('--------------------------------------')

    console.log(getHours(int))   
    console.log('--------------------------------------')

    console.log(getDays(int))   
    console.log('--------------------------------------')
 
}


function getSeconds(int){
    let seconds = int % 60
    if (seconds < 60 && seconds > 0){
        return seconds
    }
}

function getMinutes(int){
    let seconds = int % 60
    let minutes = parseInt((int % 3600) / 60)// 1 min => 60 seconds
    let hours = parseInt(int / 3600) // 1 hr => 3600 seconds 
    if (hours < 1){
        return `${(minutes)} minutes and ${seconds} seconds`
    }else if (hours >=1 || hours < 24){
        return `${hours} hours, ${minutes} minutes and ${seconds} seconds`
    }
    
}


function getHours(int){
    let seconds = int % 60
    let hours = parseInt((int % 86400) / 3600) // 1 hr => 3600 seconds
    let minutes = parseInt((int % 3600) / 60) // 1 min => 60 seconds
    let days = parseInt(int / 86400) // 1 day => 86400 seconds

    if (days < 1){
        return `${hours} hours, ${minutes} minutes and ${seconds} seconds`
    } else if ((days >= 1 || days < 365)){
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
    }
}

function getDays(int){
    let seconds = int % 60
    let minutes = parseInt((int % 3600) / 60) // 1 min => 60 seconds
    let hours = parseInt((int % 86400) / 3600) // 1 hr => 3600 seconds
    let days = parseInt((int % 31536000) / 86400) // 1 day => 86400 seconds
    let years = parseInt(int / 31536000) // 1 year => 31536000 seconds

    if (years < 1){
        return `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
    }else {
        return `${years} years, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
    }

}


formatDuration(59)
formatDuration(185) 
formatDuration(2000) // 33 minutes and 20 seconds
formatDuration(3662)  // 1 hr, 1 min, and 2 seconds
formatDuration(4062)  //
formatDuration(86400) // 1 day
formatDuration(90662) // 
formatDuration(3153600) // 
formatDuration(31536072) // 

