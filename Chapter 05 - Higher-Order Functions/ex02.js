function loop(initialValue, test, update, action)
{
    for(; test(initialValue); initialValue = update(initialValue))
        action(initialValue);
}

//The above-mentioned version works, but I am discouraged to use it. I'm told that it might cause some bugs.
function loop(initialValue, test, update, action)
{
    for(let i = initialValue; test(i); i = update(i))
        action(i);
}


//Example:
loop(3, n => n > 0, n => n - 1, console.log);
//How it will be interpreted:
    for(let i = 3; i > 0; i = i-1)
        console.log(i);