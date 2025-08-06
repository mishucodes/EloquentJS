let map = {one: true, two: true, hasOwnProperty: true};
//Calling the property directly from the prototype, & putting in the object as an argument:
console.log(Object.prototype.hasOwnProperty.call(map, "one"));