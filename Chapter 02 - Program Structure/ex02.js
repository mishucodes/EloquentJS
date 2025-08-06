//This program will print a series of numbers:


//Version 1.0 (I hope I didn't mess up):
for(let i = 1; i <= 100; ++i)
{
    if(i % 3 === 0)
        console.log("Fizz");
    else if(i % 5 === 0 && i % 3 !== 0) //I reckon that the second test might be redundant.
        console.log("Buzz");
    else
        console.log(i);
}

//Version 1.1 (I hope I didn't mess up):
for(let i = 1; i <= 100; ++i)
{
    if(i % 5 === 0 && i % 3 === 0)
        console.log("FizzBuzz");
    else if(i % 3 === 0)
        console.log("Fizz");
    else if(i % 5 === 0 && i % 3 !== 0) //I reckon that the second test might be redundant.
        console.log("Buzz");
    else
        console.log(i);
}

//Author's Solution:
for (let n = 1; n <= 100; n++)
{
    let output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}