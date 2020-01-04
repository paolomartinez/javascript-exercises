const leapYears = function(year) {
    // Leap years are years divisible by 4
    if(year % 4 == 0) {
        // Years divisible by 100 must also be divisible by 400
        if(year % 100 == 0 && year % 400 != 0) {
            return false;
        }
       return true;
    }
    return false;
}
module.exports = leapYears
