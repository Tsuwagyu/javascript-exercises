const permutations = function(arr) {

    const results = [];

    // base cases
    if (arr.length === 0) return [[]];

    // recursive case


    for (let i = 0; i < arr.length; i++) {
        let first = arr[i];
        let remaining = [...arr.slice(0, i), ...arr.slice(i + 1)];
        let subPermutations = permutations(remaining);
        for (const sub of subPermutations) {
            results.push([arr[i], ...sub]);
        }

    }

    return results;


    
    





};

  
// Do not edit below this line
module.exports = permutations;
