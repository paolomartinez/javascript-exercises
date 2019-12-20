const repeatString = function(word, numberOfTimes) {
    if(numberOfTimes < 0) return 'ERROR';
    let str = '';
    for(let i = 0; i < numberOfTimes; i++) {
        str += word;
    }
    return str;
}

module.exports = repeatString
