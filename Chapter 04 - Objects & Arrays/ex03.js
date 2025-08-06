//We're doing C-like Linked Lists now:


//01
function arrayToList(arr)
{
    let list = null;
    for(let i = arr.length-1; i >= 0; i--)
        list = {value: arr[i], rest: list};
    return list;
}
let arr = [1,2,3];
console.log(arrayToList(arr));


//02
function listToArray(list)
{
    let arr = [];
    for(let node = list; node !== null; node = node.rest)
        arr.push(node.value);
    return arr;
}
console.log(listToArray(arrayToList(arr)));


//03
function prepend(number, list)
{
    return {value: number, rest: list};
}
newList = prepend(0, arrayToList(arr));
console.log(newList);
//See the full structure here:
console.log(JSON.stringify(newList, null, 2));


//04
function nth(list, index)
{
    if (list === null)
    return undefined;
    for (let i = 0; i < index; i++)
        list = list.rest;
    return list === null ? "this index does not exist" : list.value;
}
console.log(arrayToList(arr));
console.log(nth(arrayToList(arr), 1));


//04 (Recursive Version):
function nthRecursive(list, index)
{
    if (list === null)
        return undefined;
    if (index === 0)
        return list.value;
    return nthRecursive(list.rest, index - 1);
}
console.log(nthRecursive(arrayToList(arr), 2));