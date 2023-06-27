const palindromes = function (string) {
    var re = /[\W_]/g;
    var forwardString = string.toLowerCase().replace(re, '');
    var reverseString = forwardString.split('').reverse().join('');
    return reverseString === forwardString;
};

// Do not edit below this line
module.exports = palindromes;
