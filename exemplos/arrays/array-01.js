const array = [5];
array[0] = 10;

// const objArray = new Array(5);
// [undefined, undefined, undefined, undefined, undefined]

// 10
// undefined
array.push(5);
console.log(array);

array.push(2);
console.log(array);

array.push(15);
console.log(array);

array.pop();
console.log(array);

// delete array[1];
array[1] = undefined;
console.log(array);

array[1] = 5;
array.shift(); // remove o primeiro elemento
console.log(array);

array[0] = 10;
array.unshift(100);
console.log(array);

// Inserir em qualquer posição
array.splice(1, 0, 5, 8);
console.log(array);

array.splice(2, 2, 'Array');
console.log(array);

console.log(array.slice(-3, 2));
console.log(array);
// console.log(array.reverse().slice(0, 2));

// array.splice(0, array.length, array.reverse().flat());
// console.log(array.flat());

console.log(array.concat([1, 2]));

const array1 = [1, 2, 3, 4, 5, 6, 7, 8];
const array2 = [20, 21];

console.log([array1, array2]);
console.log([...array1, ...array2]);

const [a, b, c, d, ...novoArray] = array1;
console.log(b);
console.log(novoArray.join(', '));

console.log(array1.join(', '));

const arrayDuplicado = [];
for (let i = 0; i < array1.length; i++) {
  arrayDuplicado.push(array1[i] * 2);
}

console.log(arrayDuplicado);

for (const elemento of array1) {
  console.log(elemento * 2);
}

for (const indice in array1) {
  console.log(array1[indice] * 2);
}

const fOrdenacao = (a, b) => a - b;

const arrayNaoOrdenado = [4, 1, 15, 3, 50, 2];
console.log(arrayNaoOrdenado.sort(fOrdenacao));

// function ordenacao(a, b) {
//   return a - b;
// }
// [100, 5, 'Array', 2, 1, 2]

/*
 [array, 1, 2] => [ [100, 5, 'Array', 2], 1, 2]
 [...array, 1, 2] => [100, 5, 'Array', 2, 1, 2]
*/
