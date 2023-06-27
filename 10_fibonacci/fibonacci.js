const fibonacci = function(n) {
    if (n < 0) return 'OOPS';
    let array = [0,1];
    for (let i = 2; i < n + 1; i++) {
        array.push(array[i - 2] + array[i - 1])
    }
    return array[n];
};

// Do not edit below this line
module.exports = fibonacci;
