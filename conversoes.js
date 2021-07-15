// Tipo De Dado
// Booleanos

// conversao implicita
// converter um dado em outro
// exemplos: String para um numero, um numero para string etc...

const numero = 456;
const numeroString = "456";

// console.log(numero + numeroString)

// Conversao explicita

// Number()
console.log(numero + Number(numeroString))

let largura = "10";
let altura = "5";
console.log( Number(largura) * Number(altura));

// String()
let telefone = 12341234;
// console.log("O telefone é " + String(telefone));
// ==> Outro metodo para conversao
// console.log("O telefone é " + telefone.toString());