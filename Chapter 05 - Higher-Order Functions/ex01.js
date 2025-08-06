let arrays = [[1, 2, 3], [4, 5], [6]];
let flattened = arrays.reduce((accumulator, current) => {return accumulator.concat(current);}, []);

console.log(flattened2);