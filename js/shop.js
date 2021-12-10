console.log('Cupones válidos: pikachu - evangelion - akirasushi')


// RECUPERACION DE PEDIDO DESDE INDEX Y VARIDADES 
const selectionList = document.getElementById('selection-list');
const selectionListInner = document.createElement('div');

const getShopSelected = JSON.parse(localStorage.getItem("CarritoCarta")) ;
let getShopSelectedfinal = getShopSelected;
localStorage.setItem("CarritoActual", JSON.stringify(getShopSelectedfinal));


// ORGANIZACIÓN DEL CARRITO -UNIFICACION DE PRODUCTOS SIMILARES-

let fixList = [];
const acomodarCarrito = () =>{
    
    getShopSelectedfinal.forEach((producto) =>{
        const elemento = finalShopList.find((prod)=> prod.id == producto.id)
        if(elemento){
            elemento.units2 += 1
        }
        else{
            fixList.push(producto)
        }

    })
}

let finalShopList = fixList;


// APLICACIÓN DE PRODUCTOS SELECCIONADOS A LA PÁGINA 
const actualizarCarrito = () =>{
    selectionListInner.innerHTML = ""

    finalShopList.forEach( (element) => {
         const elementShop = document.createElement('div');
    
            elementShop.innerHTML = `                       
                <div class="sushi-selected">
                <div class="shop-selected__photo">
                    <img class="shop-selected__photo-img" src="${element.img}">
                </div>
                <div class="shop-selected__info">
                    <p class="shop-selected__info-name">${element.name2}</p>
                    <p class="shop-selected__info-units">${element.units * element.units2} unidades</p>
                </div>
                <div class="shop-selected__many">
                    <input type="text" class="shop-selected__many-show" placeholder="${element.units2}">
                </div>
                <p class="shop-selected__many-price">$${element.price * element.units2}</p>
                <button onclick="eliminarDelCarrito(${element.id})" class="sushi-selected-trash">
                    <img src="./assets/icons/as-trash.svg" class="sushi-selected-trash-img">
                </button>
                </div>`
       
                selectionListInner.prepend(elementShop)
            });  

}

// AVISO DE CARRITO VACÍO 
const warningEmptyCart = () =>{
    const emptyCart = document.createElement('div')
    emptyCart.innerHTML = `
        <div class="alertEmpty__inner">
            <img src="./assets/images/emptycart.png" alt="carrito vacío" class="alertEmpty__inner-img">
            <p class="alertEmpty__inner-p1">No hay productos en tu carrito</p>
            <p class="alertEmpty__inner-p2">Vuelve a la selección de pedir online <br> y selecciona tus favoritos</p>
        </div>
    `                       
    selectionListInner.append(emptyCart)
}


// CORROBORACION DE STORAGE 

const verStorage = () =>{
    if(getShopSelectedfinal != null){
        acomodarCarrito();
        actualizarCarrito();
        selectionList.append(selectionListInner);
    }else{
        warningEmptyCart();
        selectionList.append(selectionListInner);
    }    
}
verStorage()


// SUBTOTAL - funcion previa
const verSubTotal =() =>{
    return  finalShopList.reduce( (acu, element) => acu + (element.price * element.units2), 0 );
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

// ELIMINACION DEL STORAGE (CARRITOCARTA) 

const eliminarDeStorageCC = (prodId) =>{
    const pedidoDeStorageCarritoCarta = JSON.parse(localStorage.getItem("CarritoCarta"));
    let itemsDeStorageCarritoCarta = pedidoDeStorageCarritoCarta
    const element = itemsDeStorageCarritoCarta.find(prod => prod.id === prodId);
    const indice = itemsDeStorageCarritoCarta.indexOf(element);
    itemsDeStorageCarritoCarta.splice(indice,1)
    localStorage.setItem("CarritoCarta", JSON.stringify(itemsDeStorageCarritoCarta))
}


// ELIMINACION DE ELEMENTOS 
const eliminarDelCarrito = (prodId) =>{
    const item = finalShopList.find( (prod) => prod.id === prodId);


    if(item.units2 > 1){
        item.units2 -= 1
        actualizarCarrito();
        verSubTotal();
        realizarSubTotal();
        eliminarDeStorageCC(prodId);
        if(sessionStorage.getItem("CuponAplicationName") == "pikachu"){
            totalPriceInner.innerHTML = ""
            aplicarDescuento10()
        }
        if(sessionStorage.getItem("CuponAplicationName") == "evangelion"){
            totalPriceInner.innerHTML = ""
            aplicarDescuento15()
        }
        if(sessionStorage.getItem("CuponAplicationName") == "akirasushi"){
            totalPriceInner.innerHTML = ""
            aplicarDescuento20()
        }
        localStorage.setItem("CarritoActual", JSON.stringify(finalShopList));
    }
    else{
        const indice = finalShopList.indexOf(item)
        finalShopList.splice(indice,1)
        actualizarCarrito()
        verSubTotal()
        realizarSubTotal()
        eliminarDeStorageCC(prodId);
        if(sessionStorage.getItem("CuponAplicationName") == "pikachu"){
            totalPriceInner.innerHTML = ""
            aplicarDescuento10()
        }
        if(sessionStorage.getItem("CuponAplicationName") == "evangelion"){
            totalPriceInner.innerHTML = ""
            aplicarDescuento15()
        }
        if(sessionStorage.getItem("CuponAplicationName") == "akirasushi"){
            totalPriceInner.innerHTML = ""
            aplicarDescuento20()
        }
        localStorage.setItem("CarritoActual", JSON.stringify(finalShopList));
        if(finalShopList.length == 0){
            localStorage.removeItem("CarritoActual");
            localStorage.removeItem("CarritoCarta");
            localStorage.removeItem("CarritoNov");
            iniciarCompra.classList.add('final-pur-noAccess')
            warningEmptyCart()
        } 
    }
};



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

const tenOff = (amount) => (amount * 0.10).toFixed(2);
const fifteenOff = (amount) => (amount * 0.15).toFixed(2);
const twentyOff = (amount) => (amount * 0.20).toFixed(2);

const aplicarDescuento10 = () =>{
    cuponApli = tenOff(pruebaSubTotal);
    cuponPercentageInner.innerHTML = `<p>% 10</p>` 
    cuponPercentage.append(cuponPercentageInner)
    cuponDescInner.innerHTML = `-$${cuponApli}`
    cuponDesc.append(cuponDescInner);
    totalPrice.removeChild(totalPriceInner)
    finalMount = (pruebaSubTotal - cuponApli).toFixed(2);
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
    finalMount = (pruebaSubTotal - cuponApli).toFixed(2);
    finalMountContainer.innerHTML = `$${finalMount}`
    totalPrice.append(finalMountContainer)
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
    finalMount = (pruebaSubTotal - cuponApli).toFixed(2);
    finalMountContainer.innerHTML = `$${finalMount}`
    totalPrice.append(finalMountContainer);
    sessionStorage.setItem("CuponAplicationName", "akirasushi");
    sessionStorage.setItem("CuponAplicationType", "%20");
    sessionStorage.setItem("CuponAplicationPercentage", cuponApli);
    sessionStorage.setItem("FinalMount", finalMount);
}



// APLICACION DE LOS CUPONES
const cuponSection = document.getElementById('cuponSection') 
const spanWarning = document.getElementById('span-warning')

cuponBtn.addEventListener('click', (e) =>{
    if(cuponInput.value == "pikachu"){
        let comprobarCupon = sessionStorage.getItem("CuponAplicationName")
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

