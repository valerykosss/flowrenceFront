let itemCards=JSON.parse(localStorage.getItem('card'));
let idCard=localStorage.getItem('id');

let naming = document.querySelector('.item-name');
let img = document.querySelector('.item-photo');
let price = document.querySelector('.item-price');


naming.innerHTML=itemCards[idCard].name;
price.innerHTML=itemCards[idCard].blackPrice;
img.src=itemCards[idCard].img;

function hideRow(){
    document.getElementById('basket-item__row').style.display = 'none';
}

let calculate = document.getElementById("calculation");
let totalCalculate = document.getElementById("totalCalculation");

let count = document.getElementById("buttonCountNumber");

calculation = document.getElementById("calculation").innerHTML;
totalCalculation = document.getElementById("totalCalculation").innerHTML;

document.getElementById("buttonCountPlus").onclick = function() {
  let countPlus = count.innerHTML;
  if(+countPlus <= 3){
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus) ;
    totalCalculate.innerHTML = calculations(countPlus) ;
  }
}

document.getElementById("buttonCountMinus").onclick = function() {
  let countMinus = count.innerHTML;
  if(+countMinus >= 2){
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus) ;
    totalCalculate.innerHTML = calculations(countMinus) ;
  }
}

calculations = (count) => {
  return + (+count)*(+calculation);
}