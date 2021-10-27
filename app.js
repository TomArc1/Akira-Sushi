class SushiNews{
    constructor (img, name, description, price){
        this.img = img;
        this.name = name;
        this.description = description;
        this.price = price;
    }
}
const novedad1 = new SushiNews ('./assets/images/sushi-images/image9.png' ,'Bomba Afrodita 5u.', 'Salmon, mango, palta y queso philadelphia envuelto en tamago.', '$580');
const novedad2 = new SushiNews ('./assets/images/sushi-images/image10.png','Valencia 5u.', 'Roll relleno de tomates secos, rúcula fresca y cebolla caramelizada.' , '$580');
const novedad3 = new SushiNews ('./assets/images/sushi-images/image11.png','Roll Chop Suey 5u.', 'Roll relleno con vegetales salteados al wok y palta.', '$580');

let novedades = [novedad1, novedad2, novedad3];

const cardSup = document.getElementById('cartas');

novedades.forEach( (nov) =>{
    const card = document.createElement('div');
    card.innerHTML = `<div class="s3-card">
        <img src=${nov.img} alt="Akira Sushi" class="s3-card-img">
        <div class="card__info">
        <h3 class="card__info-h3">${nov.name}</h3>
        <p class="card__info-p">${nov.description}</p>
        <p class="card__info-price">${nov.price}</p>
        <button class="card__info-btn"><span class="card__info-btnspan ">Agregar al carrito</span>+</button>
    </div>`

    cardSup.prepend(card);
} )

const cardgtm = document.createElement('div');

cardgtm.innerHTML = ` <div class="s3-card card-gtm">
                        <div class="go-to-menu">
                            <img src="./assets/images/sushi-images/Frame.svg" alt="Akira Sushi" class="gtm-img">
                            <a href="#" class="gtm-link">Ver la carta online</a>
                        </div>
                    </div>
                    `;


cardSup.append(cardgtm)