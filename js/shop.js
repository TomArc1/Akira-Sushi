console.log('Cupones válidos: pikachu - evangelion - akirasushi')

const getShopSelected = JSON.parse(localStorage.getItem("CarritoNov")) ;
const listaDePrueba = getShopSelected;
const selectionList = document.getElementById('selection-list');
const selectionListInner = document.createElement('div');


const actualizarCarrito = () =>{
    selectionListInner.innerHTML = ""

    listaDePrueba.forEach( (element) => {
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
                <button onclick="eliminarDelCarrito(${element.id})" class="sushi-selected-trash">
                    <img src="./assets/icons/as-trash.svg">
                </button>
                </div>`
       
                selectionListInner.prepend(elementShop)
            });  

}
window.addEventListener('load', ()=> {
    actualizarCarrito()
})

selectionList.append(selectionListInner)



// SUBTOTAL - funcion previa
function verSubTotal(){
    return  getShopSelected.reduce( (acu, element) => acu + element.price, 0 );
}


// SUBTOTAL - calculo 
const subTotalContainer = document.getElementById('subtotal-price');
const subTotalContainerInner = document.createElement('div');
const totalPrice = document.getElementById('total-price');
const totalPriceInner = document.createElement('div');

let pruebaSubTotal;

const realizarSubTotal = () =>{
    totalPriceInner.innerHTML = "";
    const subTotal = verSubTotal();
    subTotalContainerInner.innerHTML = ``
    subTotalContainerInner.innerHTML = `$${subTotal}`
    subTotalContainer.append(subTotalContainerInner)
    totalPriceInner.innerHTML = `$${subTotal}`;
    totalPrice.append(totalPriceInner); 
    sessionStorage.setItem("subTotal", subTotal);
    pruebaSubTotal = subTotal;
    return pruebaSubTotal
}
realizarSubTotal()

// ELIMINACION DE ELEMENTOS 
const eliminarDelCarrito = (prodId =>{
    const item = listaDePrueba.find( (prod) => prod.id === prodId);
    const indice = listaDePrueba.indexOf(item)
    listaDePrueba.splice(indice,1)
    actualizarCarrito()
    verSubTotal()
    realizarSubTotal()
    if(sessionStorage.getItem("CuponAplicationName") == "pikachu"){
        aplicarDescuento10()
    }
    if(sessionStorage.getItem("CuponAplicationName") == "evangelion"){
        aplicarDescuento15()
    }
    if(sessionStorage.getItem("CuponAplicationName") == "akirasushi"){
        aplicarDescuento20()
    }
    localStorage.setItem("CarritoNov", JSON.stringify(listaDePrueba)); 
})

// CUPONES
const cuponInput = document.getElementById('enter-cupon-input');
const cuponBtn = document.getElementById('enter-cupon-button');
const cuponPercentage = document.getElementById('active-cupon__left-percentage');
const cuponPercentageInner = document.createElement('div')
const cuponDesc = document.getElementById('active-cupon__right-price');
const cuponDescInner = document.createElement('div');
let cuponApli;
let finalMount;
const finalMountContainer = document.createElement('div')

const tenOff = (amount) => amount * 0.10
const fifteenOff = (amount) => amount * 0.15
const twentyOff = (amount) => amount * 0.20

const aplicarDescuento10 = () =>{
    cuponApli = tenOff(pruebaSubTotal);
    cuponPercentageInner.innerHTML = `<p>% 10</p>` 
    cuponPercentage.append(cuponPercentageInner)
    cuponDescInner.innerHTML = `-$${cuponApli}`
    cuponDesc.append(cuponDescInner);
    totalPrice.removeChild(totalPriceInner)
    finalMount = pruebaSubTotal - cuponApli;
    finalMountContainer.innerHTML = `$${finalMount}`
    totalPrice.append(finalMountContainer)
    sessionStorage.setItem("CuponAplicationName", "pikachu");
    sessionStorage.setItem("CuponAplicationType", "%10");
    sessionStorage.setItem("CuponAplicationPercentage", cuponApli);
    sessionStorage.setItem("FinalMount", finalMount);
}
const aplicarDescuento15 = () =>{
    cuponApli = fifteenOff(pruebaSubTotal)
    cuponPercentageInner.innerHTML = `<p>% 15</p>` 
    cuponPercentage.append(cuponPercentageInner)
    cuponDescInner.innerHTML = `-$${cuponApli}`
    cuponDesc.append(cuponDescInner);
    totalPrice.removeChild(totalPriceInner)
    finalMount = pruebaSubTotal - cuponApli;
    finalMountContainer.innerHTML = `$${finalMount}`
    totalPrice.append(finalMountContainer)
    totalPrice.removeChild(totalPriceInner)
    sessionStorage.setItem("CuponAplicationName", "evangelion");
    sessionStorage.setItem("CuponAplicationType", "%15");
    sessionStorage.setItem("CuponAplicationPercentage", cuponApli);
    sessionStorage.setItem("FinalMount", finalMount);

}
const aplicarDescuento20 = () => {
    cuponApli = twentyOff(pruebaSubTotal)
    cuponPercentageInner.innerHTML = `<p>% 20</p>` 
    cuponPercentage.append(cuponPercentageInner)
    cuponDescInner.innerHTML = `-$${cuponApli}`
    cuponDesc.append(cuponDescInner);
    totalPrice.removeChild(totalPriceInner)
    finalMount = pruebaSubTotal - cuponApli;
    finalMountContainer.innerHTML = `$${finalMount}`
    totalPrice.append(finalMountContainer);
    totalPrice.removeChild(totalPriceInner)
    sessionStorage.setItem("CuponAplicationName", "akirasushi");
    sessionStorage.setItem("CuponAplicationType", "%20");
    sessionStorage.setItem("CuponAplicationPercentage", cuponApli);
    sessionStorage.setItem("FinalMount", finalMount);
}



// APLICACION DE LOS CUPONES 
const spanWarning = document.getElementById('span-warning')

cuponBtn.addEventListener('click', (e) =>{
    if(cuponInput.value == "pikachu"){
        let comprobarCupon = sessionStorage.getItem("CuponAplicationName")
        console.log(comprobarCupon)
        if(comprobarCupon == 'pikachu'){
            spanWarning.classList.add('show--spanWarning')
        }
        else{
            aplicarDescuento10()

        }  
    }
    else if(cuponInput.value == "evangelion"){
        let comprobarCupon = sessionStorage.getItem("CuponAplicationName")
        if(comprobarCupon == ' evangelion'){
            spanWarning.classList.add('show--spanWarning')
        }
        else{
            aplicarDescuento15()
        }
    }
    else if(cuponInput.value == "akirasushi"){
        let comprobarCupon = sessionStorage.getItem("CuponAplicationName")
        if(comprobarCupon == 'akirasushi'){
            spanWarning.classList.add('show--spanWarning')
        }
        else{
            aplicarDescuento20()
        }

    }
    else{
        console.log('tu hermana')
    }
})

// SI UN CUPON YA ESTÁ CARGADO 

window.addEventListener('load', () =>{
    if(sessionStorage.getItem('CuponAplicationName') == "pikachu"){
        const reloadCupon = sessionStorage.getItem("CuponAplicationPercentage");
        totalPrice.removeChild(totalPriceInner)
        finalMount = pruebaSubTotal - reloadCupon;
        finalMountContainer.innerHTML = `$${finalMount}`
        totalPrice.append(finalMountContainer)
        cuponPercentageInner.innerHTML = `<p>% 10</p>` 
        cuponPercentage.append(cuponPercentageInner)

    }
    else if(sessionStorage.getItem('CuponAplicationName') == "evangelion"){
        const reloadCupon = sessionStorage.getItem("CuponAplicationPercentage");
        totalPrice.removeChild(totalPriceInner)
        finalMount = pruebaSubTotal - reloadCupon;
        finalMountContainer.innerHTML = `$${finalMount}`
        totalPrice.append(finalMountContainer)
        cuponPercentageInner.innerHTML = `<p>% 15</p>` 
        cuponPercentage.append(cuponPercentageInner)
    }
    else if(sessionStorage.getItem('CuponAplicationName') == "akirasushi"){
        const reloadCupon = sessionStorage.getItem("CuponAplicationPercentage");
        totalPrice.removeChild(totalPriceInner)
        finalMount = pruebaSubTotal - reloadCupon;
        finalMountContainer.innerHTML = `$${finalMount}`
        totalPrice.append(finalMountContainer)
        cuponPercentageInner.innerHTML = `<p>% 20</p>` 
        cuponPercentage.append(cuponPercentageInner)
    }
})


// PARA VER MAÑANA 
// let getShopSelected;
// let listaDePrueba;

// if(localStorage.getItem("Carrito2Instancia") == null){
//     getShopSelected = JSON.parse(localStorage.getItem("CarritoNov")) ;
//     listaDePrueba = getShopSelected;
// }
// else if(localStorage.getItem("Carrito2Instancia") != null && localStorage.getItem("CarritoNov") != null){
//     const selected1 = JSON.parse(localStorage.getItem("CarritoNov"))
//     const selected2 = JSON.parse(localStorage.getItem("CarritoNov"))
//     const listaDePrueba = selected1.concat(selected2);
// }
// else{
//     getShopSelected = JSON.parse(localStorage.getItem("Carrito2Instancia")) ;
//     listaDePrueba = getShopSelected;
// }