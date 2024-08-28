function compareTime(timeString1, timeString2){
    let dateTime1 = new Date(timeString1);
    let dateTime2 = new Date(timeString2);

    return dateTime1.getTime() > dateTime2.getTime(); //It gives the epoch time, 
    // means from 1 jan 1970 till the time, how many milliseconds have been passed.
}

module.exports = {
    compareTime
}