console.log('Cupones válidos: pikachu - evangelion - akirasushi')

const selectionList = document.getElementById('selection-list');
const selectionListInner = document.createElement('div');

let getShopSelectedfinal;
const getShopSelected = JSON.parse(localStorage.getItem("CarritoCarta")) ;
const getShopSelectedNov = JSON.parse(localStorage.getItem("CarritoNov")) ;

if(getShopSelected == null){
    getShopSelectedfinal = getShopSelectedNov;
}
if(getShopSelectedNov == null){
    getShopSelectedfinal = getShopSelected;
}
if(getShopSelectedNov != null && getShopSelected != null){
    getShopSelectedfinal = getShopSelected.concat(getShopSelectedNov)
    localStorage.setItem("CarritoActual", JSON.stringify(getShopSelectedfinal));
}


const finalShopList = getShopSelectedfinal;


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
    return  finalShopList.reduce( (acu, element) => acu + element.price, 0 );
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
const eliminarDelCarrito = (prodId) =>{
    const item = finalShopList.find( (prod) => prod.id === prodId);
    const indice = finalShopList.indexOf(item)
    finalShopList.splice(indice,1)
    actualizarCarrito()
    verSubTotal()
    realizarSubTotal()
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
    finalMount = (pruebaSubTotal - cuponApli).toFixed(2);
    finalMountContainer.innerHTML = `$${finalMount}`
    totalPrice.append(finalMountContainer);
    //totalPrice.removeChild(totalPriceInner)
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

// CAMBIO EN PANTALLA PARA EFECTUAR LA COMPRA 
const finalPur = document.getElementById('final-pur')
const formularioCompleto = document.getElementById('formularioCompleto')

finalPur.addEventListener('click', () =>{
    selectionList.classList.add('disp-none');
    cuponSection.classList.add('disp-none')
    formularioCompleto.classList.remove('disp-none')
    finalPur.classList.add('disp-none')

})

// APLICACION ESTETICA DE LOS INPUT RADIO

const datosEnvioBtn1 = document.getElementById('datosEnvio-btn1');
const datosEnvioBtn2 = document.getElementById('datosEnvio-btn2');
const envioBtnCircle1 = document.getElementById('envio-btn-circle1');
const envioBtnCircle2 = document.getElementById('envio-btn-circle2');
const datosEnvioInput1 = document.getElementById('datosEnvio-input1');
const datosEnvioInput2 = document.getElementById('datosEnvio-input2');
const datosEnvioOptional = document.getElementById('datosEnvio-optional')
const datosEnvioBtn3 = document.getElementById('datosEnvio-btn3');
const datosEnvioBtn4 = document.getElementById('datosEnvio-btn4');
const datosEnvioBtn5 = document.getElementById('datosEnvio-btn5');
const envioBtnCircle3 = document.getElementById('envio-btn-circle3');
const envioBtnCircle4 = document.getElementById('envio-btn-circle4');
const envioBtnCircle5 = document.getElementById('envio-btn-circle5');
const datosEnvioInput3 = document.getElementById('datosEnvio-input3');
const datosEnvioInput4 = document.getElementById('datosEnvio-input4');
const datosEnvioInput5 = document.getElementById('datosEnvio-input5');
const avisoSpanMP = document.querySelector('.envio-btn-span')
const datosEnvioOptional2 = document.getElementById('datosEnvio-optional2')

datosEnvioInput1.addEventListener('click', () =>{
    envioBtnCircle1.classList.add('border-red');
    envioBtnCircle2.classList.remove('border-red');
    datosEnvioOptional.classList.remove('disp-gri');

})

datosEnvioInput2.addEventListener('click', () =>{
    envioBtnCircle2.classList.add('border-red');
    envioBtnCircle1.classList.remove('border-red');
    datosEnvioOptional.classList.add('disp-gri');
})

datosEnvioBtn1.addEventListener('click', () =>{
    datosEnvioInput1.click()
})
datosEnvioBtn2.addEventListener('click', () =>{
    datosEnvioInput2.click()
})


datosEnvioInput3.addEventListener('click', () =>{
    envioBtnCircle3.classList.add('border-red');
    envioBtnCircle4.classList.remove('border-red');
    envioBtnCircle5.classList.remove('border-red');
    avisoSpanMP.classList.remove('opacity-1');
    datosEnvioOptional2.classList.remove('disp-gri');
})

datosEnvioInput4.addEventListener('click', () =>{
    envioBtnCircle4.classList.add('border-red');
    avisoSpanMP.classList.add('opacity-1')
    envioBtnCircle3.classList.remove('border-red');
    envioBtnCircle5.classList.remove('border-red');
    datosEnvioOptional2.classList.remove('disp-gri');
})

datosEnvioInput5.addEventListener('click', () =>{
    envioBtnCircle5.classList.add('border-red');
    envioBtnCircle3.classList.remove('border-red');
    envioBtnCircle4.classList.remove('border-red');
    avisoSpanMP.classList.remove('opacity-1');
    datosEnvioOptional2.classList.add('disp-gri');
})

datosEnvioBtn3.addEventListener('click', () =>{
    datosEnvioInput3.click()
    sessionStorage.removeItem("eligeMP");

})

datosEnvioBtn4.addEventListener('click', () =>{
    datosEnvioInput4.click()
    sessionStorage.setItem("eligeMP", true);
})

datosEnvioBtn5.addEventListener('click', () =>{
    datosEnvioInput5.click()
    sessionStorage.removeItem("eligeMP");
})


// APLICACION PRACTICA DE LOS INPUTS RADIO 
const inputCP = document.getElementById('inputCP');
const inputStreet = document.getElementById('inputStreet');
const inputAdressNumber = document.getElementById('inputAdressNumber');
const inputProvince = document.getElementById('inputProvince');
const inputCity = document.getElementById('inputCity');
const inputCardNumber = document.getElementById('inputCardNumber');
const inputCardExpiration = document.getElementById('inputCardExpiration');
const inputCardOwner = document.getElementById('inputCardOwner');
const inputCardSecurityNumber = document.getElementById('inputCardSecurityNumber');

datosEnvioInput2.addEventListener('click', () =>{
    inputCP.required = " ";
    inputStreet.required = " ";
    inputAdressNumber.required = " ";
    inputProvince.required = " ";
    inputCity.required = " ";
})

datosEnvioInput1.addEventListener('click', () =>{
    inputCP.removeAttribute('required')
    inputStreet.removeAttribute('required')
    inputAdressNumber.removeAttribute('required')
    inputProvince.removeAttribute('required')
    inputCity.removeAttribute('required')
})

datosEnvioInput5.addEventListener('click', () =>{
    inputCardNumber.required = " ";
    inputCardExpiration.required = " ";
    inputCardOwner.required = " ";
    inputCardSecurityNumber.required = " ";
})

datosEnvioInput3.addEventListener('click', () =>{
    inputCardNumber.removeAttribute('required')
    inputCardExpiration.removeAttribute('required')
    inputCardOwner.removeAttribute('required')
    inputCardSecurityNumber.removeAttribute('required')
})

datosEnvioInput4.addEventListener('click', () =>{
    inputCardNumber.removeAttribute('required')
    inputCardExpiration.removeAttribute('required')
    inputCardOwner.removeAttribute('required')
    inputCardSecurityNumber.removeAttribute('required')
})




// METODOS DE PAGO - MODAL DE FINALIZACIÓN DE COMPRA

const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modalData = document.createElement('div');

modalData.innerHTML = `
        <div class="modal-info">
        <div class="modal-info__inner">
            <h3 class="modal-info__inner-h3">Compra realizada con éxito!!</h3>
            <img src="./assets/images/modalfinalimg.jpeg" class="modal-info__inner-img">
            <a class="modal-info__inner-a" id="finiquito" href="index.html">Ir a la página principal</a>
        </div>
        </div>
`;

modal.append(modalData);

const mostrarModal = () => {
    modalContainer.classList.add('modal-show');
}

const finiquito = document.getElementById('finiquito');

finiquito.addEventListener('click', () =>{
    localStorage.clear()
    sessionStorage.clear()
})


//METODOS DE PAGO - MERCADO PAGO 
const finalizarCompra = () =>{

    const compraConMP = finalShopList.map((prod) =>{
        return{
            title: prod.name2,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.units2,
            currency_id: "ARS",
            unit_price: prod.price
        }
    })

    console.log(compraConMP)


    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers:{
            Authorization: 'Bearer TEST-7500855002676514-112121-e8148726a9801961fcc3cf8ff3e46cb3-263431981'
        },
        body: JSON.stringify({
            items: compraConMP
        })
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            window.location.replace(data.init_point)
        })

}

const finalizarCompra10off = () =>{

    const compraConMP = finalShopList.map((prod) =>{
        return{
            title: prod.name2,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.units2,
            currency_id: "ARS",
            unit_price: (prod.price - ((prod.price * 10)/100))
        }
    })

    console.log(compraConMP)


    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers:{
            Authorization: 'Bearer TEST-7500855002676514-112121-e8148726a9801961fcc3cf8ff3e46cb3-263431981'
        },
        body: JSON.stringify({
            items: compraConMP
        })
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            window.location.replace(data.init_point)
        })
}

const finalizarCompra15off = () =>{

    const compraConMP = finalShopList.map((prod) =>{
        return{
            title: prod.name2,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.units2,
            currency_id: "ARS",
            unit_price: (prod.price - ((prod.price * 15)/100))
        }
    })

    console.log(compraConMP)


    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers:{
            Authorization: 'Bearer TEST-7500855002676514-112121-e8148726a9801961fcc3cf8ff3e46cb3-263431981'
        },
        body: JSON.stringify({
            items: compraConMP
        })
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            window.location.replace(data.init_point)
        })
}

const finalizarCompra20off = () =>{

    const compraConMP = finalShopList.map((prod) =>{
        return{
            title: prod.name2,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.units2,
            currency_id: "ARS",
            unit_price: (prod.price - ((prod.price * 20)/100))
        }
    })

    console.log(compraConMP)


    fetch('https://api.mercadopago.com/checkout/preferences', {
        method: 'POST',
        headers:{
            Authorization: 'Bearer TEST-7500855002676514-112121-e8148726a9801961fcc3cf8ff3e46cb3-263431981'
        },
        body: JSON.stringify({
            items: compraConMP
        })
    })
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            window.location.replace(data.init_point)
        })

}



formularioCompleto.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(sessionStorage.getItem("eligeMP")){
        if(sessionStorage.getItem("CuponAplicationName") == "pikachu" ){
            finalizarCompra10off()
        }
        else if(sessionStorage.getItem("CuponAplicationName") == "evangelion" ){
            finalizarCompra15off()
    
        }
        else if( sessionStorage.getItem("CuponAplicationName") == "akirasushi" ){
            finalizarCompra20off()
    
        }
        else{
            finalizarCompra()
        }
    }
    else{   
        mostrarModal()
    }
})