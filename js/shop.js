const getShopSelected = JSON.parse(localStorage.getItem("CarritoNov")) ;

// console.log(getShopSelected)

const selectionList = document.getElementById('selection-list');
const selectionListInner = document.createElement('div');

getShopSelected.forEach( (element) => {
    
    const elementShop = document.createElement('div');

        elementShop.innerHTML = `                       
            <div class="sushi-selected">
            <div class="shop-selected__photo">
                <img class="shop-selected__photo-img" src="${element.img}">
            </div>
            <div class="shop-selected__info">
                <p class="shop-selected__info-name">${element.name2}</p>
                <p class="shop-selected__info-units">${element.units} unidades</p>
            </div>
            <div class="shop-selected__many">
                <button class="shop-selected__many-minus">
                    <img src="./assets/icons/as-minus.svg">
                </button>
                <input type="text" class="shop-selected__many-show">
                <button class="shop-selected__many-plus">
                    <img src="./assets/icons/as-plus.svg">
                </button>
            </div>
            <p class="shop-selected__many-price">$${element.price}</p>
            <button class="sushi-selected-trash">
                <img src="./assets/icons/as-trash.svg">
            </button>
            </div>`

            
            selectionListInner.prepend(elementShop)
            
            
            
            
        });  
        
        console.log(selectionListInner);
        
        selectionList.append(selectionListInner)




// TODO LO REFERIDO A PAGAR

// SUBTOTAL 

const subTotal = getShopSelected.reduce( (acu, element) => acu + element.price, 0 )
const subTotalContainer = document.getElementById('subtotal-price');
const subTotalContainerInner = document.createElement('div');
subTotalContainerInner.innerHTML = `$${subTotal}`
subTotalContainer.append(subTotalContainerInner)


// CUPONES
const cuponInput = document.getElementById('enter-cupon-input');
const cuponBtn = document.getElementById('enter-cupon-button');
const cuponPercentage = document.getElementById('active-cupon__left-percentage');
const cuponPercentageInner = document.createElement('div')
const cuponDesc = document.getElementById('active-cupon__right-price');
const cuponDescInner = document.createElement('div');
let cuponApli;

const tenOff = (amount) => amount * 0.10
const fifteenOff = (amount) => amount * 0.15
const twentyOff = (amount) => amount * 0.20

cuponBtn.addEventListener('click', (e) =>{
    if(cuponInput.value == "pikachu"){
        cuponApli = tenOff(subTotal);
        cuponPercentageInner.innerHTML = `<p>% 10</p>` 
        cuponPercentage.append(cuponPercentageInner)
        cuponDescInner.innerHTML = `-$${cuponApli}`
        cuponDesc.append(cuponDescInner);
        console.log(subTotal - cuponApli)
        
    }
    if(cuponInput.value == "evangelion"){
        cuponApli = fifteenOff(subTotal)
        cuponPercentageInner.innerHTML = `<p>% 15</p>` 
        cuponPercentage.append(cuponPercentageInner)
        cuponDescInner.innerHTML = `-$${cuponApli}`
        cuponDesc.append(cuponDescInner);
        sessionStorage.setItem("CuponAplication", cuponApli);
        console.log(subTotal - cuponApli)
    }
    if(cuponInput.value == "akirasushi"){
        cuponApli = twentyOff(subTotal)
        cuponPercentageInner.innerHTML = `<p>% 20</p>` 
        cuponPercentage.append(cuponPercentageInner)
        cuponDescInner.innerHTML = `-$${cuponApli}`
        cuponDesc.append(cuponDescInner)
        sessionStorage.setItem("CuponAplication", cuponApli);
        console.log(subTotal - cuponApli)

    }
    else{
        console.log('tu hermana')
    }
})
