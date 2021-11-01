// CONSTRUCCIÓN DE MODAL

const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modalData = document.createElement('div');


modalData.innerHTML = `
    <div class="modal-info">
        <img src="./assets/images/narumodal.png" class="narumodal">
        <div class="modal-info__inner">
            <h3 class="modal-info__inner-h3">Konnichiwa!</h3>
            <p class="modal-info__inner-p">Suscribite a nuestro newsletter y te contaremos sobre nuestros nuevos lanzamientos y promociones</p>
            <button id="modal-btn-no" class="modal-btn-no">
                <img src="./assets/icons/as-cross.svg">
            </button>
            <form id="form">
                <input type="email" class="inputEmail" id="inputEmail" placeholder="Ingresa tu email"> <br>
                <span id="text-validation" class="text-validation">El email no es válido</span>
                <button type="submit" id="modal-btn" class="modal-btn" for="form">Suscribirse</button><br>
            </form>

        </div>
    </div>
`;

modal.append(modalData);

// CONSTRUCCIÓN DE TOASTER
const toaster = document.getElementById('toaster');
const toasterInner = document.createElement('div');


toasterInner.innerHTML = `
                <div class="toast" id="toast">
                    <img src="./assets/icons/as-checkmark.svg">
                    <p>Correo Registrado!</p>
                </div>
 `
toaster.append(toasterInner);



// APERTURA Y CIERRE DEL MODAL 
const rechazoBtn = document.getElementById('modal-btn-no');
const suscribirBtn = document.getElementById('modal-btn');


if(sessionStorage.getItem("modalShowFirst") == null){
    window.addEventListener('load', () => {
        modalContainer.classList.add('modal-show');
    }) 
}

rechazoBtn.addEventListener('click', () => {
    modalContainer.classList.remove('modal-show');
    sessionStorage.setItem("modalShowFirst", false);   
})




// VALIDACION DEL EMAIL
const form = document.getElementById('form');
const inputEmail = document.getElementById('inputEmail');
const textValidation = document.getElementById('text-validation');
const pattern = / ^[^ ]+@[^ ]+\.[a-z]{2,3}$ / ;

form.addEventListener('submit', e => {
    // e.preventDefault();
    let warnings = "";
    let enter = false ;
    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
    console.log(regEx.test(inputEmail.value))
    if(!regEx.test(inputEmail.value)){
        textValidation.classList.add('text-validation--show');
        e.preventDefault()
    }
    else{
        textValidation.classList.remove('text-validation--show');
        sessionStorage.setItem("modalShowFirst", true);   
    }
})

// TOASTER APLICACION

const toast = document.getElementById('toast')
let getToast = sessionStorage.getItem("modalShowFirst");


if(getToast){
    window.addEventListener('load', () =>{
        toast.classList.add('toast--show');
    } )
}

setTimeout(() =>{
    toast.classList.remove('toast--show')
}, 2000 )











