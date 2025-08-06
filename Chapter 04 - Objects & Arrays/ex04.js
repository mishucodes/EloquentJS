//This program contains a function that performs an strict equality check on almost all sorts of data types:

function deepEqual(a, b)
{
    //Takes care of primitive objects:
    if (a === b)
        return true;

    //In case any of the variable is non-object, it means that it cannot be equal to some an object:
    if (a == null || typeof a !== "object" || b == null || typeof b !== "object")
        return false;

    //Now that we know the two variables are objects:
    let keysA = Object.keys(a), keysB = Object.keys(b);
    
    //If the two objects have an unequal number of members, they're definitely not same:
    if (keysA.length !== keysB.length)
        return false;
    
    //If objects have an equal number of members (Recursive Part of the Function):
    for (let key of keysA)
        //notice we take good advantage of short-circuting to save clock cycles:
        if (!keysB.includes(key) || !deepEqual(a[key], b[key]))
            return false;
    
    //If everything is good so far:
    return true;
}

let obj1 = { name: "Alice", details: { age: 25 } };
let obj2 = { name: "Alice", details: { age: 25 } };
let obj3 = { details: { age: 25 }, name: "Alice" };

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(obj1, obj3));
console.log(deepEqual(1,1));
console.log(deepEqual(5, "5"));
console.log(deepEqual(null, null));
console.log(deepEqual(null, {}));
console.log(deepEqual('hello', "hello"));