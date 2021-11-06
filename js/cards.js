// CREACION Y APLICACION DE CARTAS

class SushiNews{
    constructor (img, id, name,name2, description, units, price){
        this.img = img;
        this.id = id;
        this.name = name;
        this.name2 = name2;
        this.description = description;
        this.units = units;
        this.price = price;
    }
}
const novedad1 = new SushiNews ('./assets/images/sushi-images/image9.png', 1 ,'Bomba Afrodita 5u.', 'Bomba Afrodita' , 'Salmon, mango, palta y queso philadelphia envuelto en tamago.', 5 , 580);
const novedad2 = new SushiNews ('./assets/images/sushi-images/image10.png', 2,'Valencia 5u.', 'Valencia' , 'Roll relleno de tomates secos, rúcula fresca y cebolla caramelizada.', 5, 580);
const novedad3 = new SushiNews ('./assets/images/sushi-images/image11.png', 3, 'Roll Chop Suey 5u.','Roll Chop Suey' , 'Roll relleno con vegetales salteados al wok y palta.', 5, 580);

let novedades = [novedad1, novedad2, novedad3];
const carrito = [];

const cardSup = document.getElementById('cartas');

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

// AGREGAR AL CARRITO 

const shopLogo = document.getElementById('shopLogo');
const shopLogoAd = document.createElement('div');

const notice = () => {
    const add = localStorage.getItem("CarritoNov")
    if(add !== ""){
        shopLogoAd.innerHTML = `<div id="shopLogoAdInner" class="shopLogoAdInner">!</div>`;
        shopLogo.append(shopLogoAd);
    }    
}

const thereIsCarrito = localStorage.getItem("CarritoNov");
if(thereIsCarrito != null){
    notice()
}


const agregarCarrito = (prodId) => {
    const alreadyCarritoNov = localStorage.getItem("CarritoNov");
    if(alreadyCarritoNov !== null){
        const newCarritoNov = JSON.parse(localStorage.getItem("CarritoNov"))
        localStorage.removeItem("CarritoNov")
        console.log(newCarritoNov)
        const item = novedades.find( (prod) => prod.id === prodId )
        newCarritoNov.push(item);
        console.log(newCarritoNov)
        localStorage.setItem("CarritoNov", JSON.stringify(newCarritoNov))
        notice()

    }
    else if(alreadyCarritoNov === null){
        const item = novedades.find( (prod) => prod.id === prodId )
        carrito.push(item)
        localStorage.setItem("CarritoNov", JSON.stringify(carrito))
        notice()

    }

}



// CARTA QUE VA AL MENU 
const cardgtm = document.createElement('div');
cardgtm.innerHTML = ` <div class="s3-card card-gtm">
                        <div class="go-to-menu">
                            <img src="./assets/images/sushi-images/Frame.svg" alt="Akira Sushi" class="gtm-img">
                            <a href="#" class="gtm-link">Ver la carta online</a>
                        </div>
                    </div>
                    `;
cardSup.append(cardgtm)
