// APARICION DE NUEVO LOCAL 

const localpkmImg = document.getElementById('localpkm');
const infopkm = document.getElementById('infopkm');
const infoPkmQuestion = document.getElementById('question');
const infopkmDiscover = document.getElementById('discover');

localpkmImg.addEventListener('click', ()=>{
    infoPkmQuestion.classList.add('no--show');
    infopkmDiscover.classList.add('no--show');
    localpkmImg.classList.add('evolve')

    setTimeout(()=>{
        localpkmImg.setAttribute('src', '././assets/images/imglocal4.png');
        localpkmImg.classList.add('evolved');
        infoPkmQuestion.innerText = `RAMOS MEJÍA`;
        infopkmDiscover.innerText = `Pronto anunciaremos la dirección!!`
        infoPkmQuestion.classList.add('show1');
        infopkmDiscover.classList.add('show2')
    }, 1500 )
    
});