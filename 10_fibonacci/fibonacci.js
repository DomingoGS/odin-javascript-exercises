const fibonacci = function(count) {
    if(count < 0) return "OOPS";
    if(count === 0) return 0;
    let previousValue = 0;
    let currentValue = 1;
    for (member = 1; member < count; member++) {
        const result = previousValue + currentValue;
        previousValue = currentValue;
        currentValue = result;
    }
    return currentValue;
};

// Do not edit below this line
module.exports = fibonacci;
