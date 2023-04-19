const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, value) => sum + value, 0);
};

const multiply = function(array) {
  return (array.length) 
          ? array.reduce((product, value) => product * value, 1) 
          : 0;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(number) {
	let product = 1;
  for(let i = product; i <= number; i++) {
    product *= i;
  }
  return product;
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
