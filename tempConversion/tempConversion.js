const ftoc = function(temp) {
  // Formula: ([°F] − 32) × ​5⁄9
  let converted = (temp - 32) * (5/9);

  // Round the converted temperature
  let rounded = Math.round( converted * 10 ) / 10;
  return rounded;
}

const ctof = function(temp) {
  // Formula: [°C] × ​9⁄5 + 32
  let converted = temp * (9/5) + 32;
  
  let rounded = Math.round( converted * 10 ) / 10;
  return rounded;
}

module.exports = {
  ftoc,
  ctof
}
