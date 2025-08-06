//The following program reverses an Array:


//Function 01:
function reverseArray(arr)
{
    let newArr = [];
    for(let i = arr.length-1, n = 0; i >= 0; i--, n++)
        newArr[n] = arr[i];
    return newArr;
}
let arr = [0,1,2,3,4,5];
console.log(reverseArray(arr));

//Author's Version:
function reverseArray(array)
{
  let output = [];
  for (let i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}


//Function 02:
function reverseArrayInPlace(arr)
{
    for (let i = 0; i < Math.floor(arr.length / 2); i++)
    {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}
reverseArrayInPlace(arr);
console.log(arr);


//Author's Version:
function reverseArrayInPlace(array)
{
    for (let i = 0; i < Math.floor(array.length / 2); i++)
    {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;   //Notice the return is not 'undefined' (default)...
}