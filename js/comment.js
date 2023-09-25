document.getElementById('commentbtn').addEventListener('click', function(){
   const storeArea = document.getElementById('comment-area');
    const storeValue = storeArea.value
    const storeElm = document.createElement('p');
      storeElm.innerText = storeValue;
     const showBox = document.getElementById('main-box');
       showBox.appendChild(storeElm);
       storeArea.value = '';
})