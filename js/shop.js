// console.log('Cupones válidos: pikachu - evangelion - akirasushi')

// const getShopSelected = JSON.parse(localStorage.getItem("CarritoNov")) ;
// const listaDePrueba = getShopSelected;
const selectionList = document.getElementById('selection-list');
const selectionListInner = document.createElement('div');


// const actualizarCarrito = () =>{
//     selectionListInner.innerHTML = ""

//     listaDePrueba.forEach( (element) => {
//          const elementShop = document.createElement('div');
    
//             elementShop.innerHTML = `                       
//                 <div class="sushi-selected">
//                 <div class="shop-selected__photo">
//                     <img class="shop-selected__photo-img" src="${element.img}">
//                 </div>
//                 <div class="shop-selected__info">
//                     <p class="shop-selected__info-name">${element.name2}</p>
//                     <p class="shop-selected__info-units">${element.units} unidades</p>
//                 </div>
//                 <div class="shop-selected__many">
//                     <button class="shop-selected__many-minus">
//                         <img src="./assets/icons/as-minus.svg">
//                     </button>
//                     <input type="text" class="shop-selected__many-show">
//                     <button class="shop-selected__many-plus">
//                         <img src="./assets/icons/as-plus.svg">
//                     </button>
//                 </div>
//                 <p class="shop-selected__many-price">$${element.price}</p>
//                 <button onclick="eliminarDelCarrito(${element.id})" class="sushi-selected-trash">
//                     <img src="./assets/icons/as-trash.svg">
//                 </button>
//                 </div>`
       
//                 selectionListInner.prepend(elementShop)
//             });  

// }
// window.addEventListener('load', ()=> {
//     actualizarCarrito()
// })

// selectionList.append(selectionListInner)



// // SUBTOTAL - funcion previa
// function verSubTotal(){
//     return  getShopSelected.reduce( (acu, element) => acu + element.price, 0 );
// }


// // SUBTOTAL - calculo 
// const subTotalContainer = document.getElementById('subtotal-price');
// const subTotalContainerInner = document.createElement('div');
// const totalPrice = document.getElementById('total-price');
// const totalPriceInner = document.createElement('div');

// let pruebaSubTotal;

// const realizarSubTotal = () =>{
//     totalPriceInner.innerHTML = "";
//     const subTotal = verSubTotal();
//     subTotalContainerInner.innerHTML = ``
//     subTotalContainerInner.innerHTML = `$${subTotal}`
//     subTotalContainer.append(subTotalContainerInner)
//     totalPriceInner.innerHTML = `$${subTotal}`;
//     totalPrice.append(totalPriceInner); 
//     sessionStorage.setItem("subTotal", subTotal);
//     pruebaSubTotal = subTotal;
//     return pruebaSubTotal
// }
// realizarSubTotal()

// // ELIMINACION DE ELEMENTOS 
// const eliminarDelCarrito = (prodId =>{
//     const item = listaDePrueba.find( (prod) => prod.id === prodId);
//     const indice = listaDePrueba.indexOf(item)
//     listaDePrueba.splice(indice,1)
//     actualizarCarrito()
//     verSubTotal()
//     realizarSubTotal()
//     if(sessionStorage.getItem("CuponAplicationName") == "pikachu"){
//         aplicarDescuento10()
//     }
//     if(sessionStorage.getItem("CuponAplicationName") == "evangelion"){
//         aplicarDescuento15()
//     }
//     if(sessionStorage.getItem("CuponAplicationName") == "akirasushi"){
//         aplicarDescuento20()
//     }
//     localStorage.setItem("CarritoNov", JSON.stringify(listaDePrueba)); 
// })

// // CUPONES
// const cuponInput = document.getElementById('enter-cupon-input');
// const cuponBtn = document.getElementById('enter-cupon-button');
// const cuponPercentage = document.getElementById('active-cupon__left-percentage');
// const cuponPercentageInner = document.createElement('div')
// const cuponDesc = document.getElementById('active-cupon__right-price');
// const cuponDescInner = document.createElement('div');
// let cuponApli;
// let finalMount;
// const finalMountContainer = document.createElement('div')

// const tenOff = (amount) => amount * 0.10
// const fifteenOff = (amount) => amount * 0.15
// const twentyOff = (amount) => amount * 0.20

// const aplicarDescuento10 = () =>{
//     cuponApli = tenOff(pruebaSubTotal);
//     cuponPercentageInner.innerHTML = `<p>% 10</p>` 
//     cuponPercentage.append(cuponPercentageInner)
//     cuponDescInner.innerHTML = `-$${cuponApli}`
//     cuponDesc.append(cuponDescInner);
//     totalPrice.removeChild(totalPriceInner)
//     finalMount = pruebaSubTotal - cuponApli;
//     finalMountContainer.innerHTML = `$${finalMount}`
//     totalPrice.append(finalMountContainer)
//     sessionStorage.setItem("CuponAplicationName", "pikachu");
//     sessionStorage.setItem("CuponAplicationType", "%10");
//     sessionStorage.setItem("CuponAplicationPercentage", cuponApli);
//     sessionStorage.setItem("FinalMount", finalMount);
// }
// const aplicarDescuento15 = () =>{
//     cuponApli = fifteenOff(pruebaSubTotal)
//     cuponPercentageInner.innerHTML = `<p>% 15</p>` 
//     cuponPercentage.append(cuponPercentageInner)
//     cuponDescInner.innerHTML = `-$${cuponApli}`
//     cuponDesc.append(cuponDescInner);
//     totalPrice.removeChild(totalPriceInner)
//     finalMount = pruebaSubTotal - cuponApli;
//     finalMountContainer.innerHTML = `$${finalMount}`
//     totalPrice.append(finalMountContainer)
//     totalPrice.removeChild(totalPriceInner)
//     sessionStorage.setItem("CuponAplicationName", "evangelion");
//     sessionStorage.setItem("CuponAplicationType", "%15");
//     sessionStorage.setItem("CuponAplicationPercentage", cuponApli);
//     sessionStorage.setItem("FinalMount", finalMount);

// }
// const aplicarDescuento20 = () => {
//     cuponApli = twentyOff(pruebaSubTotal)
//     cuponPercentageInner.innerHTML = `<p>% 20</p>` 
//     cuponPercentage.append(cuponPercentageInner)
//     cuponDescInner.innerHTML = `-$${cuponApli}`
//     cuponDesc.append(cuponDescInner);
//     totalPrice.removeChild(totalPriceInner)
//     finalMount = pruebaSubTotal - cuponApli;
//     finalMountContainer.innerHTML = `$${finalMount}`
//     totalPrice.append(finalMountContainer);
//     totalPrice.removeChild(totalPriceInner)
//     sessionStorage.setItem("CuponAplicationName", "akirasushi");
//     sessionStorage.setItem("CuponAplicationType", "%20");
//     sessionStorage.setItem("CuponAplicationPercentage", cuponApli);
//     sessionStorage.setItem("FinalMount", finalMount);
// }



// // APLICACION DE LOS CUPONES 
// const spanWarning = document.getElementById('span-warning')

// cuponBtn.addEventListener('click', (e) =>{
//     if(cuponInput.value == "pikachu"){
//         let comprobarCupon = sessionStorage.getItem("CuponAplicationName")
//         console.log(comprobarCupon)
//         if(comprobarCupon == 'pikachu'){
//             spanWarning.classList.add('show--spanWarning')
//         }
//         else{
//             aplicarDescuento10()

//         }  
//     }
//     else if(cuponInput.value == "evangelion"){
//         let comprobarCupon = sessionStorage.getItem("CuponAplicationName")
//         if(comprobarCupon == ' evangelion'){
//             spanWarning.classList.add('show--spanWarning')
//         }
//         else{
//             aplicarDescuento15()
//         }
//     }
//     else if(cuponInput.value == "akirasushi"){
//         let comprobarCupon = sessionStorage.getItem("CuponAplicationName")
//         if(comprobarCupon == 'akirasushi'){
//             spanWarning.classList.add('show--spanWarning')
//         }
//         else{
//             aplicarDescuento20()
//         }

//     }
//     else{
//         console.log('tu hermana')
//     }
// })

// // SI UN CUPON YA ESTÁ CARGADO 

// window.addEventListener('load', () =>{
//     if(sessionStorage.getItem('CuponAplicationName') == "pikachu"){
//         const reloadCupon = sessionStorage.getItem("CuponAplicationPercentage");
//         totalPrice.removeChild(totalPriceInner)
//         finalMount = pruebaSubTotal - reloadCupon;
//         finalMountContainer.innerHTML = `$${finalMount}`
//         totalPrice.append(finalMountContainer)
//         cuponPercentageInner.innerHTML = `<p>% 10</p>` 
//         cuponPercentage.append(cuponPercentageInner)

//     }
//     else if(sessionStorage.getItem('CuponAplicationName') == "evangelion"){
//         const reloadCupon = sessionStorage.getItem("CuponAplicationPercentage");
//         totalPrice.removeChild(totalPriceInner)
//         finalMount = pruebaSubTotal - reloadCupon;
//         finalMountContainer.innerHTML = `$${finalMount}`
//         totalPrice.append(finalMountContainer)
//         cuponPercentageInner.innerHTML = `<p>% 15</p>` 
//         cuponPercentage.append(cuponPercentageInner)
//     }
//     else if(sessionStorage.getItem('CuponAplicationName') == "akirasushi"){
//         const reloadCupon = sessionStorage.getItem("CuponAplicationPercentage");
//         totalPrice.removeChild(totalPriceInner)
//         finalMount = pruebaSubTotal - reloadCupon;
//         finalMountContainer.innerHTML = `$${finalMount}`
//         totalPrice.append(finalMountContainer)
//         cuponPercentageInner.innerHTML = `<p>% 20</p>` 
//         cuponPercentage.append(cuponPercentageInner)
//     }
// })

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// BUY STEP 1 


//  const buyStep1 = () =>{
//      selectionListInner.innerHTML = `
//                  <h4 class="bs1-title">Datos de contacto</h4>
//                  <div class="bs1-grid-container">
//                      <div class="bs1-grid-cell">
//                          <p class="bs1-grid-cell-text">Email</p>
//                          <input type="email" class="bs1-grid-cell-input">
//                      </div>
//                      <div class="bs1-grid-cell">
//                          <input type="checkbox" class="bs1-grid-cell-check">
//                          <p class="bs1-grid-cell-checktext">Quiero recibir novedades por email</p>
//                      </div>
//                      <div class="bs1-grid-cell">
//                          <p class="bs1-grid-cell-text">Nombre</p>
//                          <input type="text" class="bs1-grid-cell-input">
//                      </div>
//                      <div class="bs1-grid-cell">
//                          <p class="bs1-grid-cell-text">Apellido</p>
//                          <input type="text" class="bs1-grid-cell-input">
//                      </div>
//                      <div class="bs1-grid-cell">
//                          <p class="bs1-grid-cell-text">DNI</p>
//                          <input type="text" class="bs1-grid-cell-input">
//                      </div>
//                      <div class="bs1-grid-cell">
//                          <div class="bs1-grid-cell6">
//                              <p class="bs1-grid-cell-text-area">Area</p>
//                              <input type="text" class="bs1-grid-cell-input-area">
//                          </div>
//                          <div class="bs1-grid-cell6">
//                              <p class="bs1-grid-cell-text">Teléfono</p>
//                              <input type="text" class="bs1-grid-cell-input-cell">
//                          </div>
//                      </div>
//                  </div>
//                  <button class="btnToStep2">Continuar</button>

// `

//  }
//  buyStep1()
//  selectionList.append(selectionListInner);

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// BUY STEP 2 

// const buyStep2 = () =>{

//      selectionListInner.innerHTML = `
//                 <div class="datospersonalesResumen">
//                     <div class="datospersonalesResumen__sup">
//                         <h5 class="datospersonalesResumen__sup-h5">Datos de Contacto</h5>
//                         <button class="datospersonalesResumen__sup-btn">
//                             <img class="datospersonalesResumen__sup-btnimg" src="./assets/icons/as-edit.svg">
//                         </button>
//                     </div>
//                     <div class="datospersonalesResumen__inf">
//                     </div>
//                 </div>
//                 <div class="datosEnvio-container">
//                     <h3 class="datosEnvio-container__h3">Datos de Envío</h3>
//                     <button class="datosEnvio-container__btn">
//                         <div class="datosEnvio-container__btn-left">
//                             <div class="envio-btn-circle"></div>
//                             <input type="radio" name="envio" class="envio-btn-radio">
//                             <img src="./assets/icons/as-truck.png" class="envio-btn-icon">
//                             <p class="envio-btn-p">Envío a domicilio</p>
//                         </div>
//                         <div class="datosEnvio-container__btn-right">
//                             <div class="envio-btn-mount"></div>
//                         </div>
//                     </button>
//                     <button class="datosEnvio-container__btn">
//                         <div class="datosEnvio-container__btn-left">
//                             <div class="envio-btn-circle"></div>
//                             <input type="radio" name="envio" class="envio-btn-radio">
//                             <img src="./assets/icons/as-sucursal.svg" class="envio-btn-icon">
//                             <p class="envio-btn-p">Retiro en sucursal</p>
//                         </div>
//                         <div class="datosEnvio-container__btn-right">
//                             <div class="envio-btn-mount"></div>
//                         </div>
//                     </button>
//                 </div>
//                 <div class="datosEnvio-container-optional">
//                     <div class="bs2-grid-cell">
//                         <p class="bs1-grid-cell-text">Código Postal</p>
//                         <input type="text" class="bs1-grid-cell-input">
//                     </div>
//                     <div class="bs2-grid-cell">
//                         <p class="bs1-grid-cell-text">Calle</p>
//                         <input type="text" class="bs1-grid-cell-input">
//                     </div>
//                     <div class="bs2-grid-cell">
//                         <p class="bs1-grid-cell-text">Departamento</p>
//                         <input type="text" class="bs1-grid-cell-input">
//                     </div>
//                     <div class="bs2-grid-cell">
//                         <p class="bs1-grid-cell-text">Altura</p>
//                         <input type="text" class="bs1-grid-cell-input">
//                     </div>
//                     <div class="bs2-grid-cell">
//                         <p class="bs1-grid-cell-text">Provincia</p>
//                         <input type="text" class="bs1-grid-cell-input">
//                     </div>
//                     <div class="bs2-grid-cell">
//                         <p class="bs1-grid-cell-text">Ciudad</p>
//                         <input type="text" class="bs1-grid-cell-input">
//                     </div>
//                 </div>
//                 <button class="btnToStep3">Continuar</button>
//      `
    
// }
// buyStep2()
// selectionList.append(selectionListInner);

// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------
// BUY STEP 3 

// const buyStep3 = () =>{

//     selectionListInner.innerHTML = `
//             <div class="resumenTodaLaData">
//             <div class="datospersonalesResumen">
//                 <div class="datospersonalesResumen__sup">
//                     <h5 class="datospersonalesResumen__sup-h5">Datos de Contacto</h5>
//                     <button class="datospersonalesResumen__sup-btn">
//                         <img class="datospersonalesResumen__sup-btnimg" src="./assets/icons/as-edit.svg">
//                     </button>
//                 </div>
//                 <div class="datospersonalesResumen__inf">
//                 </div>
//             </div>
//             <div class="datosenvioResumen">
//                 <div class="datosenvioResumen__sup">
//                     <h5 class="datosenvioResumen__sup-h5">Datos de envío</h5>
//                     <button class="datosenvioResumen__sup-btn">
//                         <img class="datosenvioResumen__sup-btnimg" src="./assets/icons/as-edit.svg">
//                     </button>
//                 </div>
//                 <div class="datosenvioResumen__inf">
//                 </div>
//             </div>
//         </div>
//         <div class="datosPago-container">
//             <h3 class="datosPago-container__h3">Pago</h3>
//             <button class="datosPago-container__btn">
//                 <div class="datosPago-container__btn-inner1">
//                     <div class="envio-btn-circle"></div>
//                     <input type="radio" name="pago" class="envio-btn-radio">
//                     <img src="./assets/icons/as-money.svg" class="envio-btn-icon">
//                     <p class="envio-btn-p">Efectivo</p>
//                 </div>
//             </button>
//             <button class="datosPago-container__btn">
//                 <div class="datosPago-container__btn-inner2">
//                     <div class="envio-btn-circle"></div>
//                     <input type="radio" name="pago" class="envio-btn-radio">
//                     <img src="./assets/icons/as-creditcard.svg" class="envio-btn-icon">
//                     <p class="envio-btn-p">Tarjeta de Crédito / Débito</p>
//                 </div>
//             </button>
//         </div>
//         <div class="datosEnvio-container-optional">
//             <div class="bs2-grid-cell">
//                 <p class="bs1-grid-cell-text">Número de la tarjeta</p>
//                 <input type="text" class="bs1-grid-cell-input">
//             </div>
//             <div class="bs2-grid-cell">
//                 <p class="bs1-grid-cell-text">Vencimiento</p>
//                 <input type="text" class="bs1-grid-cell-input">
//             </div>
//             <div class="bs2-grid-cell">
//                 <p class="bs1-grid-cell-text">Titular</p>
//                 <input type="text" class="bs1-grid-cell-input">
//             </div>
//             <div class="bs2-grid-cell">
//                 <p class="bs1-grid-cell-text">Número de seguridad</p>
//                 <input type="text" class="bs1-grid-cell-input">
//             </div>
//         </div>
//         <button class="btnToStep3">Continuar</button>
//     `
   
// }
// buyStep3()
// selectionList.append(selectionListInner);