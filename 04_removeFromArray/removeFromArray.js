const removeFromArray = function(items, ...itemsToRemove) {
    let args = [...itemsToRemove];

    return items.filter(item => args.filter(arg => arg === item).length == 0);
};

// Do not edit below this line
module.exports = removeFromArray;
