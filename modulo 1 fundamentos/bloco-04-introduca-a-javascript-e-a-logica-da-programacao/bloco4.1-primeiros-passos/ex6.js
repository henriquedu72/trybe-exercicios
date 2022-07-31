// let peao = "anda para frente uma casa";
// let torre = "anda para frente e lados quantas casas puder";
// let bispo = "diagonal";
// let rainha = "frente lado diagonal varias casas";
// let rei  = "frnte lado diagonal uma casa apenas";
// let peca = torre;
// // peâo, torre, cavalo, bisbo, rainha, rei.

// if (peca = peao) {
//     console.log(peao);
// } else if (peca = torre) {
//     console.log(torre);
// } else if (peca = bispo) {
//     console.log(bispo)
// } else if (peca = rainha) {
//     console.log(rainha);
// } else {
//     console.log(rei);
// }
let peca = 'REI'.toLocaleLowerCase();


switch (peca) {
    case "peao":
        console.log('anda para frente uma casa');
        break;
    case "torre":
        console.log('anda para frente e lados quantas casas puder');
        break;
    case "cavalo":
        console.log('anda em L');
        break;
    case "bispo":
        console.log('diagonal');
        break;
    case "rainha":
        console.log('frente lado diagonal varias casas');
        break;
    case "rei":
        console.log('frente lado diagonal uma casa apenas');
        break;
    default:
        console.log('peça não identificada');
}