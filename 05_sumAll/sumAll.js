const sumAll = function(start, end) {
    if (Number.isInteger(start) && start >= 0 && Number.isInteger(end) && end >= 0) {
        let nums = [start, end].sort();
        return (((nums[1]*(nums[1]+1))/2) - ((nums[0]*(nums[0]+1))/2) + 1);
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
