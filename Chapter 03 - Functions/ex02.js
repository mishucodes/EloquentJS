//This program will determine whether a number is odd or even using recursion:

function isEven(x)
{
    if(x < 0)
        x = -x;

    if(x === 0)
        return true;
    else if(x === 1)
        return false;
    else
        return isEven(x-2);
}

console.log(isEven(-1));


//Author's Solution:
function isEven(n)
{
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}