const sumAll = function(numOne, numTwo) {
    if(!Number.isInteger(numOne) || !Number.isInteger(numTwo) || numOne < 0 || numTwo < 0) {
        return 'ERROR';
    } 
    let sum = 0;
    let start = Math.min(numOne, numTwo);
    let end = Math.max(numOne, numTwo);
    for(let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
