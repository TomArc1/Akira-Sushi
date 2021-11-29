const cartaPiezas = document.getElementById('cartaPiezas');
const cartaSalads = document.getElementById('cartaSalads');
const cartaPlatos = document.getElementById('cartaPlatos');
const bar1 = document.querySelector('.s1inf-middle-one-bar');
const bar2 = document.querySelector('.s1inf-middle-two-bar');
const bar3 = document.querySelector('.s1inf-middle-three-bar');
const koffing = document.querySelector('.koffing')
const nezuko = document.querySelector('.nezuko')
const hamtaro = document.querySelector('.hamtaro')
const majinbuu = document.querySelector('.majinbuu')
const sailormoon = document.querySelector('.sailormoon')
const mokona = document.querySelector('.mokona')

const section2 = document.getElementById('section-2');
const cardsContainer = document.getElementById('cardsContainer');
let elementosSeleccionados;
let pieces;
let salads;
let platos;
let todaLaCarta

const seleccionDePiezas = () =>{
    fetch(`./js/carta2.json`)
        .then( (resp) => resp.json() )
        .then( (data) =>{

            todaLaCarta = data;
            pieces = data.filter((unidad)=> unidad.pieces == true )

           cardsContainer.innerHTML=""

           pieces.forEach( (unidad) =>{
            const card = document.createElement('div');
            card.innerHTML = `<div class="s3-card">
                <img src=${unidad.img} alt="Akira Sushi" class="s3-card-img">
                <div class="card__info">
                <h3 class="card__info-h3">${unidad.name}</h3>
                <p class="card__info-p">${unidad.description}</p>
                <p class="card__info-price">$${unidad.price}</p>
                <button id="take${unidad.id}" class="btn-agregar  card__info-btn">
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
        
            cardsContainer.prepend(card);
        
            const btnNov = document.getElementById(`take${unidad.id}`) 
        
            btnNov.addEventListener('click', () =>{
                agregarCarrito(unidad.id)
            })
           
        } )


        } )
}

const seleccionDeSalads = () =>{
    fetch(`./js/carta2.json`)
        .then( (resp) => resp.json() )
        .then( (data) =>{

            todaLaCarta = data;
            salads = data.filter((unidad)=> unidad.salads == true )

           cardsContainer.innerHTML=""


           salads.forEach( (unidad) =>{
            const card = document.createElement('div');
            card.innerHTML = `<div class="s3-card">
                <img src=${unidad.img} alt="Akira Sushi" class="s3-card-img">
                <div class="card__info">
                <h3 class="card__info-h3">${unidad.name}</h3>
                <p class="card__info-p">${unidad.description}</p>
                <p class="card__info-price">$${unidad.price}</p>
                <button id="take${unidad.id}" class="btn-agregar  card__info-btn">
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
        
            cardsContainer.prepend(card);
        
            const btnNov = document.getElementById(`take${unidad.id}`) 
        
            btnNov.addEventListener('click', () =>{
                agregarCarrito(unidad.id)
            })
           
        } )


        } )
}


const seleccionDePlatos = () =>{
    fetch(`./js/carta2.json`)
        .then( (resp) => resp.json() )
        .then( (data) =>{
    

            todaLaCarta = data;
            
           platos = data.filter((unidad)=> unidad.hotdishes == true )
           console.log(platos)

           cardsContainer.innerHTML=""


           platos.forEach( (unidad) =>{
            const card = document.createElement('div');
            card.innerHTML = `<div class="s3-card">
                <img src=${unidad.img} alt="Akira Sushi" class="s3-card-img">
                <div class="card__info">
                <h3 class="card__info-h3">${unidad.name}</h3>
                <p class="card__info-p">${unidad.description}</p>
                <p class="card__info-price">$${unidad.price}</p>
                <button id="take${unidad.id}" class="btn-agregar  card__info-btn">
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
        
            cardsContainer.prepend(card);
        
            const btnNov = document.getElementById(`take${unidad.id}`) 
        
            btnNov.addEventListener('click', () =>{
                agregarCarrito(unidad.id)
            })
           
        } )

        } )
}

window.addEventListener('load', ()=>{
    seleccionDePiezas()
    bar1.classList.add('show--bar');
})


cartaPiezas.addEventListener('click', ()=>{
    seleccionDePiezas()
    bar1.classList.add('show--bar');
    bar2.classList.remove('show--bar');
    bar3.classList.remove('show--bar');
    koffing.classList.remove('no--show');
    nezuko.classList.remove('no--show');
    hamtaro.classList.add('no--show');
    majinbuu.classList.add('no--show');
    sailormoon.classList.add('no--show');
    mokona.classList.add('no--show');
})

cartaSalads.addEventListener('click', ()=>{
    seleccionDeSalads()
    bar2.classList.add('show--bar');
    bar1.classList.remove('show--bar');
    bar3.classList.remove('show--bar');
    koffing.classList.add('no--show');
    nezuko.classList.add('no--show');
    hamtaro.classList.remove('no--show');
    majinbuu.classList.remove('no--show');
    sailormoon.classList.add('no--show');
    mokona.classList.add('no--show');

})

cartaPlatos.addEventListener('click', ()=>{
    seleccionDePlatos()
    bar3.classList.add('show--bar');
    bar1.classList.remove('show--bar');
    bar2.classList.remove('show--bar');
    koffing.classList.add('no--show');
    nezuko.classList.add('no--show');
    hamtaro.classList.add('no--show');
    majinbuu.classList.add('no--show');
    sailormoon.classList.remove('no--show');
    mokona.classList.remove('no--show');
})


// AGREGAR AL CARRITO - AVISO

const shopLogo = document.getElementById('shopLogo');
const shopLogoAd = document.createElement('div');

const notice = () => {
    const add1 = localStorage.getItem("CarritoCarta")

    if(add1 !== ""){
        shopLogoAd.innerHTML = `<div id="shopLogoAdInner" class="shopLogoAddInner">!</div>`;
        shopLogo.append(shopLogoAd);
    }    
}

const thereIsCarrito1 = localStorage.getItem("CarritoNov");
const thereIsCarrito2 = localStorage.getItem("CarritoCarta");
if(thereIsCarrito1 != null || thereIsCarrito2 != null ){
    notice()
}




// AGREGAR AL CARRITO
let newCart =[]; 


const agregarCarrito = (prodId) => {
    const alreadyCarrito = localStorage.getItem("CarritoCarta");
    if(alreadyCarrito !== null){
        const newUpdateCarrito = JSON.parse(localStorage.getItem("CarritoCarta"))
        localStorage.removeItem("CarritoCarta")
        console.log(newUpdateCarrito)
        const item = todaLaCarta.find( (prod) => prod.id === prodId )
        newUpdateCarrito.push(item);
        console.log(newUpdateCarrito)
        localStorage.setItem("CarritoCarta", JSON.stringify(newUpdateCarrito))
        notice()

    }
    else if(alreadyCarrito === null){
        const item = todaLaCarta.find( (prod) => prod.id === prodId )
        newCart.push(item)
        localStorage.setItem("CarritoCarta", JSON.stringify(newCart))
        notice()

    }
}
