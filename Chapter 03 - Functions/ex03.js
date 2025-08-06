//This function return the number of occurrences of a particular character within a string:

function findChar(str, char)
{
    let count = 0, strLen = str.length;
    for(let i = 0; i < strLen; i++)
        if(str[i] === char)
            count++;
    
    return count;
}

console.log(findChar("hello world", "h"));