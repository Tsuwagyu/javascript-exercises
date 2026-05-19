const permutations = function(arr) {

    console.log("permutations called with:", arr);

    const results = [];

    // base cases
    if (arr.length === 0) return [[]];

    // recursive case


    const remainingArr = arr.slice(1);
    const first = arr[0];
    const subPermutations = permutations(remainingArr);

    for (const sub of subPermutations) {
        results.push([first, ...sub]);
    }
    return results;


    
    





};

console.log(permutations([1, 2, 3]));

  
// Do not edit below this line
module.exports = permutations;
