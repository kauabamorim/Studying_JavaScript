// Tipo Number

const meuNumero = 3;

const primeiroNumero = Math.floor(Math.random() * 20);
const segundoNumero = Math.floor(Math.random() * 20);

// SOMA
const operacaoMatematica = primeiroNumero + segundoNumero;

// Subtracao
// const operacaoMatematica = primeiroNumero - segundoNumero;

// MULTIPLICACAO
// const operacaoMatematica = primeiroNumero * segundoNumero;

// DIVISAO
// const operacaoMatematica = primeiroNumero / segundoNumero;

console.log(operacaoMatematica)

// Ponto Flutuante

const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .9;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN -> Not A Number (não é um numero)

const alura = "Alura";
console.log(alura * primeiroNumero);