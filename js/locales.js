$('#local1').append(`
    <div class="local1__inner">
        <h2 class="local1__inner-h2">Barrio de Palermo</h2>
        <p class="local1__inner-p1">Calle VayaseASaberDonde 93, esq. Gorriti </p>
        <p class="local1__inner-p2">Tel: 5437-1234 // Wpp: 15-1234-1234</p>
        <h5 class="local1__inner-h5">Horarios:</h5>
        <ul class="local1__inner-ul">
            <li class="local1__inner-li">Lun. 20hs-24hs</li>
            <li class="local1__inner-li">Mar. 20hs-24hs</li>
            <li class="local1__inner-li">Mier. 20hs-24hs</li>
            <li class="local1__inner-li">Jue. 20hs-24hs</li>
            <li class="local1__inner-li">Vier. 20hs-24hs</li>
            <li class="local1__inner-li">Sáb. 20hs-24hs</li>
        </ul>
    </div>
    <img class="imglocal" src="./assets/images/imglocal.jpeg">
`)



$('#local2').append(`
        <div class="local2__inner">
            <h2 class="local2__inner-h2 mb">Estás a un click de distancia para averiguar donde vamos a estar muy pronto!</h2>
            <img id="img2" class="img2" class="imglocal" src="./assets/images/whos_that_pokemon.png">
        </div>
        `)

$('.imglocal').css('width', '700px')



$('#local2').on('click',()=>{

    if(sessionStorage.getItem("Cambio") === null){
        $('.local2__inner-h2').addClass('byebyeOpacity')
        $('#img2').addClass('byebyeOpacity')
        sessionStorage.setItem("Cambio", true)
    
    
        setTimeout(() => {
            $('.local2__inner').css('display', 'none')
            $('#local2').append(`
            <div class="local1__inner">
                <h1 class="local1__inner-h1">MUY PRONTO!!!!</h1>
                <h2 class="local1__inner-h2">Barrio de Belgrano</h2>
                <p class="local1__inner-p1">Av. IaTuSabe 5492, esq. Paraguay </p>
                <p class="local1__inner-p2">Tel: 1234-1234 // Wpp: 15-1234-1234</p>
                <h5 class="local1__inner-h5">Horarios:</h5>
                <ul class="local1__inner-ul">
                    <li class="local1__inner-li">Lun. 20hs-24hs</li>
                    <li class="local1__inner-li">Mar. 20hs-24hs</li>
                    <li class="local1__inner-li">Mier. 20hs-24hs</li>
                    <li class="local1__inner-li">Jue. 20hs-24hs</li>
                    <li class="local1__inner-li">Vier. 20hs-24hs</li>
                    <li class="local1__inner-li">Sáb. 20hs-24hs</li>
                </ul>
            </div>
            <img id="img2" class="img2" class="imglocal" src="./assets/images/whoIs2.jpeg">

        `)
        }, 1000)


    }
    console.log('funca')
} )

window.addEventListener('load',()=>{
    sessionStorage.clear()
})