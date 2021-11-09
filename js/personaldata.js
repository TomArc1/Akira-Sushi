
// ENVIA A DOMICILIO 
const enviaADomicilio = document.getElementById('envioADomicilio')
const retira = document.getElementById('retiraEnSucursal')
const addres = document.getElementById('addres');
const addresLocation = document.getElementById('addres-location');
const addresStreet = document.getElementById('addres-street');
const addresNumber = document.getElementById('addres-number')

enviaADomicilio.addEventListener('click', () =>{
    addres.classList.add('show--addres');
    addresLocation.required = " ";
    addresStreet.required = " ";
    addresNumber.required = " ";
})

retira.addEventListener('click', () =>{
    addres.classList.remove('show--addres')
    addresLocation.removeAttribute("required")
    addresStreet.removeAttribute("required")
    addresNumber.removeAttribute("required")
})




// CONFIRMACION DE LOS MONTOS DE LA COMPRA 
const subTotal = sessionStorage.getItem("subTotal");
const cuponName = sessionStorage.getItem("CuponAplicationName");
const cuponType = sessionStorage.getItem("CuponAplicationType");
const cuponPercen = sessionStorage.getItem("CuponAplicationPercentage");
const finalMount = sessionStorage.getItem("FinalMount");



const subTotalContainer = document.getElementById('subtotal-price');
const subTotalContainerInner = document.createElement('div');
const cuponPercentage = document.getElementById('active-cupon__left-percentage');
const cuponPercentageInner = document.createElement('div')
const cuponDisc = document.getElementById('active-cupon__right-price');
const cuponDiscInner = document.createElement('div');
const totalPrice = document.getElementById('total-price');
const totalPriceInner = document.createElement('div');


subTotalContainerInner.innerHTML = `$${subTotal}`;
subTotalContainer.append(subTotalContainerInner);

if(cuponType != null){
    cuponPercentageInner.innerHTML = `${cuponType}`;
    cuponPercentage.append(cuponPercentageInner);
    cuponDiscInner.innerHTML = `-$${cuponPercen}`;
    cuponDisc.append(cuponDiscInner)
    totalPriceInner.innerHTML = `$${finalMount}`
    totalPrice.append(totalPriceInner);
}
else{
    totalPriceInner.innerHTML = `$${subTotal}`
    totalPrice.append(totalPriceInner);
}

// MODAL DE CONFIRMACION DE COMPRA

const modalContainer = document.getElementById('modal-container');
const modal = document.getElementById('modal');
const modalData = document.createElement('div');
const finalForm = document.getElementById('finalForm')


modalData.innerHTML = `
    <div class="modal-info">
        <div>
            <h3>Compra realizada con éxito!!</h3>
            <a id="finiquito" href="index.html">Ir a la pagina principal</a>
        </div>
    </div>
`;

modal.append(modalData);

const mostrarModal = () => {
    modalContainer.classList.add('modal-show');
}

finalForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    mostrarModal()
})

const finiquito = document.getElementById('finiquito');

finiquito.addEventListener('click', () =>{
    localStorage.clear()
    sessionStorage.clear()
})
