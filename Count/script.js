var count = 0;
var output = document.getElementById('output');
var ban = document.querySelector('bananas')
function countClicks()
{
    count = count + 1;
    output.innerHTML = count;
    bananas.innerHTML = count;
}
