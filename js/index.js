// method-1:HTML a function call kora
function callRed(){
    document.body.style.backgroundColor = 'red';
}

// Method-2:"id" dhora and function call kora
const green = document.getElementById('green-color');
green.onclick = callGreen;
function callGreen(){
    document.body.style.backgroundColor = 'green';
}

// Method-3:"id" dhora and anonymous function diya
const yellow = document.getElementById('yellow-color');
yellow.onclick = function(){
    document.body.style.background = 'yellow';
}

// Method-4:"id" dhora and "addEEvenListener" diya
const sky = document.getElementById('sky-color');
sky.addEventListener('click', function(){
    document.body.style.backgroundColor = 'skyblue';
})

// Method-5:"id" dhora and "addEEvenListener" diya but without variable 
// most uses
document.getElementById('black-color').addEventListener('click', function(){
    document.body.style.background = 'black';
})
