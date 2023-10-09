const str01 = 'string - tipo 1';
const str02 = 'string - tipo 2';
const str03 = `string - tipo 3`; // template literals

const citacao = 'Conforme Maria, "João Pessoa está quente"';
const citacao2 = "Conforme Maria, 'João Pessoa está quente'";
const citacao3 = `Conforme Maria, 'João Pessoa está quente'`;

const soma = (a, b) => a + b;

const x = 2;
const y = 3;
console.log('O resultado da soma de ' + x + ' + ' + y + ' é ' + soma(2, 3));

console.log(`O resultado da soma de ${x} + ${y} é ${soma(x, y)}`);

const objString = String('string - tipo 4');
console.log(typeof objString);

console.log('I \u00b0 JavaScript!');

// ---------- Métodos ----------
console.log('string - tipo 3 - template literals'.length);
console.log('string - tipo 3 - template literals'.includes('L'));
console.log(
  'STRING - Coleção de caracteres - tipo 3 - template literals'.toUpperCase()
);

let strTeste = 'STRING - Coleção de caracteres - tipo 3 - template literals';
console.log(strTeste.toUpperCase().includes('N'));

console.log('<p></p>\n'.repeat(5)); // p*5

// let strTeste = 'STRING - Coleção de caracteres - tipo 3 - template literals';
console.log(strTeste.toLowerCase().startsWith('string'));
console.log(strTeste.endsWith('ls'));

console.log('Linguagens de Script'.substr(1, 5));
console.log('Linguagens de Script'.substring(2, -1));
console.log('Linguagens de Script'.slice(11, 13));

console.log('15,2,3,4,5,7,8,9'.split(','));

// natan
// 1 - Usando o for

// 2 - Usando funções de strings e de arrays
const nome = 'natann';
const inversoNome = nome.split('').reverse().join('');

if (nome === inversoNome) console.log('eh Palindromo');
else console.log('Nao eh Palindromo');
