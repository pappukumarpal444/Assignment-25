const items2 = document.getElementsByClassName('item');
for (const element of items2) {
    element.addEventListener('click', function(e){
        // console.log(e.target.parentNode);
        console.log(e.target.parentNode.removeChild(element));

    })
}