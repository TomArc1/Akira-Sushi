// PARALAX 
const rellax = new Rellax('.rellax');

// CONSTRUCCIÓN DE MODAL

const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modalData = document.createElement('div');


modalData.innerHTML = `
    <div class="modal-info">
        <img src="./assets/images/narumodal.png" class="narumodalimg">
        <div class="modal-info__inner">
            <h3 class="modal-info__inner-h3">Konnichiwa!</h3>
            <p class="modal-info__inner-p">Suscribite a nuestro newsletter y te contaremos sobre nuestros nuevos lanzamientos y promociones</p>
            <button id="modal-btn-no" class="modal-btn-no">
                <img src="./assets/icons/as-cross.svg">
            </button>
            <form id="form">
                <input name="email" type="email" class="inputEmail" id="inputEmail" placeholder="Ingresa tu email"> <br>
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

modalContainer.addEventListener('click', (e) =>{
    rechazoBtn.click();
})

modal.addEventListener('click', (e) =>{
    e.stopPropagation()
})


// VALIDACION DEL EMAIL
const form = document.getElementById('form');
const inputEmail = document.getElementById('inputEmail');
const textValidation = document.getElementById('text-validation');
const pattern = / ^[^ ]+@[^ ]+\.[a-z]{2,3}$ / ;

form.addEventListener('submit', e => {
    // e.preventDefault()

    let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ; 
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

const showModalOneTime = () =>{
    window.addEventListener('load', () =>{
        toast.classList.add('toast--show');
    } )   
    setTimeout(() =>{
        toast.classList.remove('toast--show');
    }, 2000 )

    sessionStorage.setItem("modalShowFirst", "Ya registrado");
}

if(getToast != "Ya registrado" && getToast != null){
    showModalOneTime()
} 


// CREACION Y APLICACION DE CARTAS

const cardSup = document.getElementById('cartas');
const carrito = [];
let novedades;

const mostrarNovedades = () => {
    fetch('./js/carta2.json')
    .then( (resp) => resp.json())
    .then( (data =>{

        const novedad1 = data.find((nov) => nov.id == 101);
        const novedad2 = data.find((nov) => nov.id == 102);
        const novedad3 = data.find((nov) => nov.id == 103);
        novedades = [novedad3,novedad2,novedad1];

        novedades.forEach( (nov) =>{
            const card = document.createElement('div');
            card.innerHTML = `<div class="s3-card">
                <img src=${nov.img} alt="Akira Sushi" class="s3-card-img">
                <div class="card__info">
                <h3 class="card__info-h3">${nov.name}</h3>
                <p class="card__info-p">${nov.description}</p>
                <p class="card__info-price">$${nov.price}</p>
                <button id="take${nov.id}" class="btn-agregar  card__info-btn">
                    <span class="card__info-btnspan" style="overflow:hidden;">
                        <span class="asdasd" style="white-space: nowrap;">
                            Agregar al carrito
                        </span>
                    </span>
                    <span class="mas">
                        +
                    </span>
                </button>
            </div>`
        
            cardSup.prepend(card);
        
            const btnNov = document.getElementById(`take${nov.id}`) 
        
            btnNov.addEventListener('click', () =>{
                agregarCarrito(nov.id)
            })
           
        } )
}))
}

mostrarNovedades()


// AGREGAR AL CARRITO - AVISO

const shopLogo = document.getElementById('shopLogo');
const shopLogoAd = document.createElement('div');

const notice = () => {
    const add = localStorage.getItem("CarritoNov")
    if(add !== ""){
        shopLogoAd.innerHTML = `<div id="shopLogoAdInner" class="shopLogoAddInner">!</div>`;
        shopLogo.append(shopLogoAd);
    }    
}

const thereIsCarrito = localStorage.getItem("CarritoCarta");
if(thereIsCarrito != null){
    notice()
}


const agregarCarrito = (prodId) => {
    const alreadyCarritoNov = localStorage.getItem("CarritoCarta");
    if(alreadyCarritoNov !== null){
        const newCarritoNov = JSON.parse(localStorage.getItem("CarritoCarta"))
        localStorage.removeItem("CarritoCarta")
        const item = novedades.find( (prod) => prod.id === prodId )
        newCarritoNov.push(item);
        localStorage.setItem("CarritoCarta", JSON.stringify(newCarritoNov))
        notice()

    }
    else if(alreadyCarritoNov === null){
        const item = novedades.find( (prod) => prod.id === prodId )
        carrito.push(item)
        localStorage.setItem("CarritoCarta", JSON.stringify(carrito))
        notice()

    }

}

// CARTA QUE VA AL MENU 
const cardgtm = document.createElement('div');
cardgtm.innerHTML = ` <div class="s3-card card-gtm">
                        <div class="go-to-menu">
                            <img src="./assets/icons/as-gtm.svg" alt="Akira Sushi" class="gtm-img">
                            <a href="#" class="gtm-link">Ver la carta online</a>
                        </div>
                    </div>
                    `;
cardSup.append(cardgtm)
