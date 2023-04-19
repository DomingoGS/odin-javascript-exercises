const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	if (array.length === 0) return 0;
  return array.reduce((sum, value) => sum + value, 0);
};

const multiply = function(array) {
  if (array.length === 0) return 0;
  return array.reduce((product, value) => product * value, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let result = 1;
  for(let n = 1; n <= number; n++) {
    result *= n;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
