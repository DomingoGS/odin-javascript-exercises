const fibonacci = function(specificMember) {
    if(specificMember < 1) return "OOPS";
    let previousValue = 1;
    let currentValue = 1;
    let result;
    for (member = 3; member <= specificMember; member++) {
        result = previousValue + currentValue;
        previousValue = currentValue;
        currentValue = result;
    }
    return currentValue;
};

// Do not edit below this line
module.exports = fibonacci;
