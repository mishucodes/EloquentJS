//This program will do the sum of a range of numbers:


function range(start, end)
{
    let result = [];
    for(let i = 0; start <= end; i++, start++)
        result[i] = start;
    return result;
}

function sum(range)
{
    let result = 0;
    for(let value of range)
        result += value;
    return result;
}
console.log(sum(range(1, 10)));


//Bonus Assignment:
function range2(start, end, step = start < end? 1 : -1)
{
    let result = [];
    if (start <= end)
    {
        for(let i = 0; start <= end; i++, start+=step)
            result[i] = start;
        return result;
    }
    else
    {
        for(let i = 0; start >= end; i++, start+=step)
            result[i] = start;
        return result;
    }
}

console.log(range2(1, 10, 2));
console.log(range2(5, 2, -1));