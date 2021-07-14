// Var - Muito solta

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area;

// Let -> Aceita mudar valores, Sempre declarar antes de ser utilizada

// let altura = 5;
// let comprimento = 7;
// let forma = "retangulo";
// let area;

// if (forma === "retangulo"){
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) / 2;
// }

// console.log(area);

// Const -> N recebe novos valores, Valor Fixo

const forma = "triangulo";
const altura = 5;
const comprimento = 7;
let area;

if (forma === "quadrado") {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2;
}

console.log(area);
