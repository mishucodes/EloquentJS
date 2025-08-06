//This program will print a maze of #HashTags:

//My Solution:
let mazeSize = 8;
for(let i = 0; i < mazeSize; i++)
{
    let column = "";
    for (let j = 0; j < mazeSize; j++)
        if((i % 2 === 0 && j % 2 === 0) || (i % 2 !== 0 && j % 2 !== 0))
            column += " ";
        else
            column += "#";
    console.log(column);
}


console.log();


//Author's Solution:
let size = 8;
let board = "";
for (let y = 0; y < size; y++)
{
    for (let x = 0; x < size; x++)
    {
        if ((x + y) % 2 == 0)
        {
        board += " ";
        }
        else
        {
        board += "#";
        }
    }
    board += "\n";
}
console.log(board);