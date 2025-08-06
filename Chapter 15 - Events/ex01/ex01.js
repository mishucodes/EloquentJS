let initialSize = 5;
let baloon = document.getElementsByTagName('span')[0];
baloon.style.fontSize = initialSize + 'rem';

document.addEventListener('keyup', (event) =>
    {
        if(initialSize > 30)
        {
            baloon.innerText = '💥';
            return;
        }

        if(event.key == 'ArrowUp')
            baloon.style.fontSize = (++initialSize) + 'rem';
        else if(event.key == 'ArrowDown')
            baloon.style.fontSize = (--initialSize) + 'rem';
    });