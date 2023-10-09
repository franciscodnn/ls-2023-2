// function soma(op1, op2 = 0) {
//   return op1 + op2;
// }

function soma(...params) {
  let resultado = 0;

  for (const elemI of params) {
    resultado = resultado + elemI;
  }
  // for (let i = 0; i < params.length; i++) {
  //   // resultado = resultado + params[i]
  //   resultado += params[i];
  //   console.log(params[i]);
  // }

  return resultado;
}

// console.log(soma(5));
// console.log(soma(5, 10));
// console.log(soma(5, 10, 15, 20, 25));

let f = 10;
f = function (op1, op2) {
  return op1 + op2;
};

f = (op1, op2) => {
  return op1 + op2;
};

f = (op1, op2) => op1 + op2;

const g = f;

console.log(f(5, 10));
console.log(f);
