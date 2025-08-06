let one = document.getElementById('bodyOne');
let two = document.getElementById('bodyTwo');
let angleOne = Math.PI / 2;
let angleTwo = Math.PI / 2;

function animate(time, lastTime, body, direction, angle)
{
    if (lastTime != null)
    {
        if(direction === 0)
            angle -= (time - lastTime) * 0.001;
        else
            angle += (time - lastTime) * 0.001;
    }
    body.style.top = (Math.sin(angle) * 300) + "px";
    body.style.left = (Math.cos(angle) * 400) + "px";
    requestAnimationFrame(newTime => animate(newTime, time, body, direction, angle));
}

requestAnimationFrame(time => animate(time, undefined, one, 0, angleOne));
requestAnimationFrame(time => animate(time, undefined, two, 1, angleTwo));