const convertToCelsius = function(farenheitDegrees) {
  const celsiusDegrees = (farenheitDegrees - 32) * 5 / 9;
  return Math.round(celsiusDegrees * 10) / 10;
};

const convertToFahrenheit = function(celsiusDegrees) {
  const farenheitDegrees = (celsiusDegrees * 9 / 5) + 32;
  return Math.round(farenheitDegrees * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
