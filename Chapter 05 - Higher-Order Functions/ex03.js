//One:
function every(array, test)
{
    for(let i = 0; i < array.length; i++)
        if(!test(array[i]))
            return false;
    return true;
}
//Two:
function everySome(array, test)
{
    if(array.some(i => !test(i)))
        return false;
    return true;
}


//Examples:
  console.log(every([1, 3, 5], n => n < 10));
  console.log(every([2, 4, 16], n => n < 10));
  console.log(every([], n => n < 10));

  console.log(everySome([1, 3, 5], n => n < 10));
  console.log(everySome([2, 4, 16], n => n < 10));
  console.log(everySome([], n => n < 10));