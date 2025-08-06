let dots = [];
for (let i = 0; i < 10; i++)
{
    let node = document.createElement("div");
    node.className = "trail";
    document.body.appendChild(node);
    dots.push(node);
}
let currentDot = 0;

document.addEventListener('mousemove', (event) =>
    {
        let dot = dots[currentDot];
        dot.style.left = (event.pageX - 3) + "px";
        dot.style.top = (event.pageY - 3) + "px";
        currentDot = (currentDot + 1) % dots.length;        
    });