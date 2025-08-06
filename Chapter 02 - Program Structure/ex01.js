//This program will print a series of #HashTags:


//My Solution:
let userInput = 5;
for (let i = 1; i <= userInput; i++)
{
    let row = "";
    for (let j = 0; j < i; j++)
        row += "#";
    console.log(row);
}

//Author's Solution:
for (let line = "#"; line.length < 8; line += "#")
    console.log(line);