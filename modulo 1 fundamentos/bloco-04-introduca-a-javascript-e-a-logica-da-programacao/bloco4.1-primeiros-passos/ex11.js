let salario = 3000;
let inss = 0;
let iR = 0;


if (salario <= 1596.94) {
    inss = salario / 100 * 8;
} else if (salario >= 1556.95 && salario <= 2594.92) {
    inss = salario / 100 * 9;
} else if (salario >= 2594,93 && salario <= 5189.82) {
    inss = salario / 100 * 11;
} else {
    inss = 570.88; 
} 
salario = salario - inss;

if (salario <= 1903.98) {
    iR = 0;
} else if (salario >= 1903.99 && salario <= 2826.65) {
    iR = (salario / 100 * 7.5) - 142.80;
} else if (salario >= 2826.66 && salario <= 3751.05) {
    iR = (salario /100 * 15) - 354.80;
} else if (salario >= 3751.06 && salario <= 4664.68) {
    iR = (salario / 100 * 22.5) - 636.13;
} else {
    iR = (salario / 100 * 27.5) - 869.36;
}
salario = salario - iR;

console.log(salario);