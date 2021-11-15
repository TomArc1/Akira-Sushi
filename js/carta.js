class AkiraCarta{
    constructor (img, id, name,name2, description, units, price){
        this.img = img;
        this.id = id;
        this.name = name;
        this.name2 = name2;
        this.description = description;
        this.pieces = pieces;
        this.salads = salads;
        this.hotdishes = hotdishes;
        this.units = units;
        this.price = price;
    }
}
const bombaAfrodita = new AkiraCarta ('./assets/images/akira-carta/bombaAfrodita.png', 101 ,'Bomba Afrodita 5u.', 'Bomba Afrodita' , 'Salmon, mango, palta y queso philadelphia envuelto en tamago.', true, false, false, 5 , 580);
const valencia = new AkiraCarta ('./assets/images/akira-carta/valencia.png', 102,'Valencia 5u.', 'Valencia' , 'Roll relleno de tomates secos, rúcula fresca y cebolla caramelizada.', true, false, false, 5, 580);
const chopSuey = new AkiraCarta ('./assets/images/akira-carta/chopSuey.png', 103, 'Roll Chop Suey 5u.','Roll Chop Suey' , 'Roll relleno con vegetales salteados al wok y palta.', true, false, false, 5, 580);
const niji = new AkiraCarta ('./assets/images/akira-carta/niji.png', 104, 'Roll Niji 5u.', 'Roll Niji', 'Salmon, repollo encurtido, palta, envuelto en mango.', true, false, false, 5, 334);
const clerck = new AkiraCarta ('./assets/images/akira-carta/clerck.png', 105, 'Roll Clerck 5u.', 'Roll Clerck', 'Roll relleno de salmón cocido con miel y mostaza, queso phila y batata.', true, false, false, 5, 349);
const calafate = new AkiraCarta('./assets/images/akira-carta/calafate.png', 106, 'Roll Calafate 5u.', 'Roll Calafate', 'Roll de tamago rellno de arroz, philadelphia y palta', true, false, false, 5, 474);
const newYork = new AkiraCarta('./assets/images/akira-carta/newYork.png', 107, 'Roll New York 5u.', 'Roll New York', true, false, false, 5, 349);
const valencia = new AkiraCarta ('./assets/images/akira-carta/valencia.png', 108, 'Valencia 5u', 'Valencia', 'Roll relleno de tomates secos, rúcula fresca, y cebolla caramelizada.', true, false, false, 5, 299);
const tora = new AkiraCarta ('./assets/images/akira-carta/tora.png', 109, 'Roll Tora 5u', 'Roll Tora', 'Piezas relleno de langostinos rebozados con palta', true, false, false, 5, 344);
const newYorkHot = new AkiraCarta ('./assets/images/akira-carta/newYorkHot.png', 110,'Roll New York 5u', 'Roll New York', 'Roll rebozado relleno de salmón, arroz, palta y queso Phila.', true, false, false, 5, 364);
const firenze = new AkiraCarta ('./assets/images/akira-carta/firenze.png', 111,'Roll Firenze 5u.', 'Roll Firenze', 'Roll rebozado relleno de salmon grill, coronado con mayo de palta.', true, false, false, 5, 339);
const bologna = new AkiraCarta ('./assets/images/akira-carta/bologna.png', 112, 'Bologna Roll 5u.', 'Bologna Roll', 'Roll rebozado relleno de langostinos salteado con pimentón y philadelphia.', true, false, false, 5, 564 );


const pokeSalmonFresh = new AkiraCarta('./assets/images/akira-carta/pokeSalmonFresh.png', 201, 'Poke Salmón Fresh', 'Poke Salmon Fresh', 'Fresca ensalada de salmón, eneldo fresco, reyadura de limón', false, true, false, 1, 699);
const pokeSalmango = new AkiraCarta('./assets/images/akira-carta/pokeSalmango.png', 202, 'Poke Salmango', 'Poke Salmango', 'Fresca ensalada de salmón y mango, salsa maracuya, cebolla morada', false, true, false, 1, 699);
const pokeSalmon = new AkiraCarta ('./assets/images/akira-carta/pokeSalmon.png', 203, 'Poke Salmón', 'Poke Salmón', 'Fresca ensalda de salmón, palta, queso phila, repollo y zanahoria', false, true, false, 1, 699);
const pokeSalmonCrispy = new AkiraCarta('./assets/images/akira-carta/pokeSalmonCrispy.png', 204, 'Poke Salmón Crispy', 'Poke Salmón Crispy', 'Fresca ensalada de salmón rebozado, palta, queso phila, repollo.', false, true, false, 1, 699);
const pokeHawaiana = new AkiraCarta ('./assets/images/akira-carta/pokeHawaiana.png', 205, 'Poke Hawaiana', 'Poke Hawaiana','Fresca ensalada de salmón fresco, juliana de tamago y repollo colorado', false, true, false, 1, 699);
const pokeLangostinos = new AkiraCarta ('./assets/images/akira-carta/pokeLangostino.png', 206, 'Poke Langostinos', 'Poke Langostinos', 'Fresca ensalada de langostinos rebozados, palta, queso phila.', false, true, false, 1, 619);
const pokePolloMex = new AkiraCarta('./assets/images/akira-carta/pokePolloMex.png', 207, 'Poke Pollo Mex', 'Poke Pollo Mex', 'Fresca ensalada de pollo rebozado, salsa teriyaki, guacamole', false, true, false, 1, 619);
const pokeVeggie = new AkiraCarta('./assets/images/akira-carta/pokeVegie.png', 208, 'Poke Veggie', 'Poke Veggie', false, true, false, 1, 619);



const salmonConArroz = new AkiraCarta ('./assets/images/akira-carta/salmonConArroz.png', 301, 'Salmón con Arroz,', 'Salmón con Arroz', 'Salmón sellado a la plancha con salsa Teriyaki, verduras salteadas con arroz', false, false, true, 1, 1049);
const salmonConQuinoa = new AkiraCarta('./assets/images/akira-carta/salmonConQuinoa.png', 302, 'Salmón con Quinoa', 'Salmón con Quinoa', 'Salmón sellado a la plancha con salsa Teriyaki, verduras salteadas y quinoa.', false, false, true, 1, 1099);
const padTahi = new AkiraCarta('./assets/images/akira-carta/padTahi.png', 303, 'Pad Thai', 'Pad Thai', 'Salteado de langostinos sobre fideos de arroz finos salteados con huevo', false, false, true, 1, 879);
const cerdoShogayaki = new AkiraCarta ('./assets/images/akira-carta/cerdoShogayaki.png', 304, 'Cerdo Shogayaki', 'Cerdo Shogayaki', 'Wok de bondiola de cerdo marinada en jengibre, acompañado de arroz', false, false, true, 1, 799);
const chickenCurry = new AkiraCarta ('./assets/images/akira-carta/chickenCurry.png', 305, 'Chicken Curry', 'Chicken Curry', 'Pollo al curry(levemente picante) con crema de coco y almendra', false, false, true, 1, 749);
const lomoXao = new AkiraCarta ('./assets/images/akira-carta/lomoXao.png', 306, 'Lomo Xao', 'Lomo Xao', 'Nutritivo plato de origen Vietnamita, que combina lomo y vegetales', false, false, true, 1, 799);
const chopSueyVeggie = new AkiraCarta ('./assets/images/akira-carta/chopSueyVeggie.png', 306, 'Chop Suey Veggie', 'Chop Suey Veggie', false, false, true, 1, 699);