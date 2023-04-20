const palindromes = function (str) {
    let cleanStr = str.replace(/[^\p{L}]/gu, '');
    cleanStr = cleanStr.toLowerCase();

    const reversedStr = cleanStr.split('').reverse().join('');

    return cleanStr.localeCompare(reversedStr) === 0;
};

// Do not edit below this line
module.exports = palindromes;
