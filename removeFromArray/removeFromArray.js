const removeFromArray = function (...args) {
    // the very first item in our list of arguments is the array, we pull it out with args[0]
    const array = args[0];
    return array.filter(val => !args.includes(val));
  };
module.exports = removeFromArray
