const productValor = 100;
const valorSell = 150;

const productValorTotal = productValor + (productValor / 100 * 20);

let lucro = valorSell - productValorTotal;
console.log(lucro);
console.log(lucro * 1000);
