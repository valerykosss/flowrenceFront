let itemCards=JSON.parse(localStorage.getItem('card'));
let idCard=localStorage.getItem('id');

let naming = document.querySelector('.item-window__header');
let img = document.querySelector('.item-img');

naming.innerHTML=itemCards[idCard].name;
img.src=itemCards[idCard].img;

let windowItem = document.querySelectorAll('.item-window__container');
for (i = 0; i < windowItem.length; i++) {
    windowItem[i].addEventListener('click', function () {
        let id = 1;
        localStorage.setItem('id', id);
        console.log(localStorage);
    });
}