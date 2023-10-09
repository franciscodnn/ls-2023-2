console.log('teste');

var x = 10;
let y = 15;
const z = '20';
let ePrimo = false;
let dividePor5 = null;
let pessoa = {
  nome: 'Francisco',
  idade: 37,
};

/* y = 'Idade: 15'; */

let resultado = 'O resultado da soma x e y é ' + (x + y);
console.log(resultado);
// console.log(x);
// console.log(y);
// console.log(z);
console.log(pessoa.nome);

// Coleção - Array de Objetos
const array = [5, 10, 15, 20];
console.log(array[array.length - 1]);

array[1] = 30; // True
// array = [1, 2, 3, 4]; // False
// console.log(array);

const disciplina = {
  nome: 'LS',
  periodo: 2,
};
disciplina.curso = 'TSI';
disciplina.periodo = 1;

// disciplina = {};

console.log(disciplina);

const citacao = "Conforme Sócrates, 'Só sei que nada sei'";
// console.log(citacao);

resultado = 'O resultado da soma x e y é ${x + y}!';
console.log(resultado);

resultado = `O resultado da soma x e y é ${x + y}!`;
console.log(resultado);
