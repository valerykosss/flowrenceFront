// let str = "I love JavaScript";

// let addressInput  = str.match(/Java(Script)/);

$(function(){
    $("#card-input1").mask("9999 9999 9999 9999");
    $("#card-input3").mask("99/99", {placeholder: "мм/гг" });
    $("#phone1").mask("+375 (99) 999-99-99", {placeholder: "+375 (__) ___-__-__" });
    $("#phone2").mask("+375 (99) 999-99-99", {placeholder: "+375 (__) ___-__-__" });
    $("#dateTime").mask("99.99.9999 99:99", {placeholder: "дд.мм.гггг чч:мн" });
});

function showInputAdress() {

    if (document.getElementById('address-opt').checked == true) {
        document.getElementById('selfPick-opt').checked = false;
        document.getElementById('address-input').style.display = 'block';
    }
    else if (document.getElementById('selfPick-opt').checked == true) {
        document.getElementById('address-opt').checked = false;
        document.getElementById('address-input').style.display = 'none';
    }
}

function showInputCard(){
    if (document.getElementById('payment4').checked == true) {
        document.getElementById('payment1').checked = false;
        document.getElementById('payment2').checked = false;
        document.getElementById('payment3').checked = false;
        document.getElementById('card-input1').style.display = 'block';
        document.getElementById('card-input2').style.display = 'block';
        document.getElementById('card-input3').style.display = 'block';
    }
    else{
        document.getElementById('card-input1').style.display = 'none';
        document.getElementById('card-input2').style.display = 'none';
        document.getElementById('card-input3').style.display = 'none';
    }
}