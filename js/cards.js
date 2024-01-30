
    let cards=[
        {
            "img":"../img/catalogImages/img1.svg",
            "name":"Букет \"Радужное настроение\"",
            "greyPrice":"120",
            "blackPrice":"100",
            "id":0
        },
        {
            "img":"../img/catalogImages/img2.svg",
            "name":"Букет \"Летний бриз\"",
            "greyPrice":"130",
            "blackPrice":"105",
            "id":1
        },
        {
            "img":"../img/catalogImages/img3.svg",
            "name":"Букет \"Волшебный сад\"",
            "greyPrice":"140",
            "blackPrice":"117",
            "id":2
        },
        {
            "img":"../img/catalogImages/img4.svg",
            "name":"Букет \"Романтическая нежность\"",
            "greyPrice":"130",
            "blackPrice":"115",
            "id":3
        },
        {
            "img":"../img/catalogImages/img5.svg",
            "name":"Букет \"Жизнь в розовом цвете\"",
            "greyPrice":"140",
            "blackPrice":"123",
            "id":4
        },
        {
            "img":"../img/catalogImages/img6.svg",
            "name":"Букет \"Французский шик\"",
            "greyPrice":"130",
            "blackPrice":"124",
            "id":5
        },
        {
            "img":"../img/catalogImages/img7.svg",
            "name":"Букет \"Страсть и романтика\"",
            "greyPrice":"140",
            "blackPrice":"113",
            "id":6
        },
        {
            "img":"../img/catalogImages/img8.svg",
            "name":"Букет \"Зефирка\"",
            "greyPrice":"130",
            "blackPrice":"128",
            "id":7
        },
        {
            "img":"../img/catalogImages/img9.svg",
            "name":"Букет \"Признание в любви\"",
            "greyPrice":"140",
            "blackPrice":"120",
            "id":8
        },
        {
            "img":"../img/catalogImages/img10.svg",
            "name":"Букет \"Нежность лепестков\"",
            "greyPrice":"130",
            "blackPrice":"124",
            "id":9
        },
        {
            "img":"../img/catalogImages/img11.svg",
            "name":"Букет \"Цветущий сад\"",
            "greyPrice":"150",
            "blackPrice":"130",
            "id":10
        },
        {
            "img":"../img/catalogImages/img12.svg",
            "name":"Букет \"Весенний букет\"",
            "greyPrice":"140",
            "blackPrice":"120",
            "id":11
        },
        {
            "img":"../img/catalogImages/img13.svg",
            "name":"Букет \"Яркие эмоции\"",
            "greyPrice":"130",
            "blackPrice":"110",
            "id":12
        },
        {
            "img":"../img/catalogImages/img14.svg",
            "name":"Букет \"Цветочное манящее\"",
            "greyPrice":"140",
            "blackPrice":"110",
            "id":13
        },
        {
            "img":"../img/catalogImages/img15.svg",
            "name":"Букет \"Волшебство цветов\"",
            "greyPrice":"130",
            "blackPrice":"110",
            "id":14
        },
        {
            "img":"../img/catalogImages/img16.svg",
            "name":"Букет \"Легкая весна\"",
            "greyPrice":"140",
            "blackPrice":"130",
            "id":15
        },
        {
            "img":"../img/catalogImages/img17.svg",
            "name":"Букет \"Роскошь в цветах\"",
            "greyPrice":"140",
            "blackPrice":"120",
            "id":16
        },
        {
            "img":"../img/catalogImages/img18.svg",
            "name":"Букет \"Счастливый день\"",
            "greyPrice":"140",
            "blackPrice":"120",
            "id":17
        },
        {
            "img":"../img/catalogImages/img19.svg",
            "name":"Букет \"Море чувств\"",
            "greyPrice":"130",
            "blackPrice":"120",
            "id":18
        },
        {
            "img":"../img/catalogImages/img20.svg",
            "name":"Букет \"Восторг\"",
            "greyPrice":"150",
            "blackPrice":"120",
            "id":19
        },
        {
            "img":"../img/catalogImages/img21.svg",
            "name":"Букет \"Солнечный настроение\"",
            "greyPrice":"140",
            "blackPrice":"120",
            "id":20
        },
        {
            "img":"../img/catalogImages/img22.svg",
            "name":"Букет \"Весенний ветер\"",
            "greyPrice":"130",
            "blackPrice":"110",
            "id":21
        },
        {
            "img":"../img/catalogImages/img23.svg",
            "name":"Букет \"Цветочный рай\"",
            "greyPrice":"150",
            "blackPrice":"120",
            "id":22
        },
        {
            "img":"../img/catalogImages/img24.svg",
            "name":"Букет \"Стремительный ритм\"",
            "greyPrice":"140",
            "blackPrice":"110",
            "id":23
        }
    ];

    let wrapper=document.querySelector('.catalog-block__body');
    
    let toArray = Object.values(cards);
    let sortedByPriceAsc = [...toArray].sort((a, b) => a.blackPrice - b.blackPrice);
    let sortedByPriceDesc = [...toArray].sort((a, b) => a.blackPrice - b.blackPrice).reverse();
    
    let cardsSortedByPriceAsc = {
        ...sortedByPriceAsc
    }
    let cardsSortedByPriceDesc = {
        ...sortedByPriceDesc
    }
    
    function createCards(){
        wrapper.innerHTML= "";
    
        for(let key in elems){
            elems[key].id=key;
            let content = '<div class="block__body-item" id="'+elems[key].id+'"><img class="item-image" src="'+elems[key].img+'"><div class="item-name">'+elems[key].name+'</div><div class="item-price"><div class="item-price__gray">'+elems[key].greyPrice+' руб.</div><div class="item-price__black">'+elems[key].blackPrice+' руб. </div></div><a class="item-button" value="btn'+elems[key].id+'" id="btn'+elems[key].id+'" href="windowCard.html">Подробнее </a>';
            wrapper.innerHTML += content;

            let card=document.querySelectorAll('.block__body-item');
            for (i = 0; i < card.length; i++) {
                let btnId = document.getElementById("btn"+i);
                console.log(btnId);
                card[i].addEventListener('click', function () {
                    let id = this.id;
                    localStorage.setItem('id', id);
                });
            }
        }
    }
    
    let elems=[];
    
    elems=cardsSortedByPriceAsc;
    createCards();
    
    function getValue(selectObject) {
        value = selectObject.value;
        if(value=="price_asc"){
            elems=cardsSortedByPriceAsc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
        }
        if(value=="price_desc"){
            elems=cardsSortedByPriceDesc;
            createCards();
            localStorage.setItem('card',  JSON.stringify(elems));
        }
    };
    
    elems=[];
    function getNumberValue() {
        let minPrice = parseInt(document.getElementById("minPrice").value);
        let maxPrice = parseInt(document.getElementById("maxPrice").value);
        let rangeElems = cards;

        for (let key in rangeElems){
            if(rangeElems[key].blackPrice >= minPrice && rangeElems[key].blackPrice <= maxPrice){
                console.log(rangeElems[key].blackPrice);
                elems[key]=rangeElems[key];
            }
        }
        if(document.getElementById("minPrice").value != '' && document.getElementById("maxPrice").value!=''){
            createCards();
        }
        //console.log(elems);
    }

    