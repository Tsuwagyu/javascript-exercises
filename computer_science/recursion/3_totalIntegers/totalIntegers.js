const totalIntegers = function(item, value) {

    // reject non objects, and any values that are null, nan, or a string

    if (typeof item !== "object") {
        return undefined;
    }

    // recursive case

    let count = 0;

    for (const value of Object.values(item)) {
        if (Number.isInteger(value)) {
            count++; 
        }

        if (typeof value === "object" && value !== null) {
            count+= totalIntegers(value) ;
        }
    }

    return count;


  
};
  
// Do not edit below this line
module.exports = totalIntegers;
