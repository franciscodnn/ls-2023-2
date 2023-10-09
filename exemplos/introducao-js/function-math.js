function areaCirculo(raio) {
  return Math.PI * raio ** 2;
}

const areaCirculoAF = (raio) => Math.PI * raio ** 2;

console.log(areaCirculoAF(10).toFixed(2));

const verificarTriangulo = (l1, l2, l3) => {
  let resultado = undefined;

  let isTriangulo = false;

  if((l1 + l2) > l3 || (l2 + l3) > l1 || 
    (l1 + l3) > l2) 

  if (l1 == l2 && l2 == l3 && l1 == l3) 
    resultado = 'equilatero';
  else 
};
