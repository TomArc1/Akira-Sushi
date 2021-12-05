// CAMBIO EN PANTALLA PARA EFECTUAR LA COMPRA 
const iniciarCompra = document.getElementById('iniciarCompra')
const formularioCompleto = document.getElementById('formularioCompleto')

const validacionDeCarrito = () =>{
    if(getShopSelectedfinal == null){
        iniciarCompra.classList.add('final-pur-noAccess');
    }
    else{
        iniciarCompra.classList.remove('final-pur-noAccess');
    }
}

validacionDeCarrito()

iniciarCompra.addEventListener('click', () =>{
    selectionList.classList.add('disp-none');
    cuponSection.classList.add('disp-none')
    formularioCompleto.classList.remove('disp-none')
    iniciarCompra.classList.add('disp-none')

})



// APLICACION ESTÉTICA DE LOS INPUT RADIO

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
                <img src="./assets/images/finmodal.png" class="finmodalimg">
                <div class="modal-info__inner">
                    <h3 class="modal-info__inner-h3">¡COMPRA REALIZADA!</h3>
                    <p class="modal-info__inner-p">Te llegara vía email un aviso cuando tu 
                    pedido este completo para realizar el seguimiento o para retirarlo.z</p>
                    <button type="submit" id="modal-btn" class="modal-btn" for="form">
                    <a href="index.html" id="compraFinalizada" class="modal-btn-link">Ir al Inicio</a>
                    </button>
                </div>
            </div>
`;

modal.append(modalData);

const mostrarModal = () => {
    modalContainer.classList.add('modal-show');
}

// const compraFinalizada = document.getElementById('compraFinalizada');

// compraFinalizada.addEventListener('click', () =>{
//     localStorage.clear()
//     sessionStorage.clear()
// })


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
    localStorage.clear()
    sessionStorage.clear()
})


