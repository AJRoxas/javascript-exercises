const reverseString = function(str) {
    let result = "";
    let split = str.split("");

    for (let i = split.length; i > 0; i--) {
        result += split[i-1];
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
