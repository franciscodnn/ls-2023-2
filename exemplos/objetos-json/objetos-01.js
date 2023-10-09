const pessoa = {
  nome: 'Francisco',
  sobrenome: 'Dantas',
  ehProfessor: false,
  idade: 40,
  email: 'dantas.nobre@ifpb.edu.br',
  obterNomeCompleto: function () {
    return this.nome + ' ' + this.sobrenome;
  },
};

console.log(pessoa.obterNomeCompleto());

pessoa.nome = 'FRANCISCO';
console.log(pessoa.obterNomeCompleto());

if (pessoa.ehProfessor) pessoa.disciplina = 'Linguagens de Script';

console.log(pessoa.nome);
console.log(pessoa['nome']);

pessoa['nome'] = 'Francisco';
console.log(`${pessoa['nome']} ${pessoa.sobrenome}`);

const pessoa2 = pessoa;
console.log(pessoa2.nome);

pessoa2.nome = 'José';
console.log(pessoa.nome);

pessoa.email = 'dn@ifpb.edu.br';
console.log(pessoa2.email);

pessoa.nome = 'Francisco';
let pessoa3 = { ...pessoa };
/*
  {
    nome: "Francisco",
    sobrenome: "Dantas",
    idade: ...,
    email: ...,
    obterNomeCompleto: ...
  }
*/

pessoa3.nome = 'Antonio';
console.log(pessoa.nome);
console.log(pessoa3.nome);

pessoa3 = pessoa2;
pessoa3.nome = 'Maria';
console.log(pessoa.nome);

const pessoa4 = { ...pessoa, curso: 'Sistemas para Internet' };
console.log(pessoa4);

const obj = {
  'nome completo': 'Francisco Dantas',
};

console.log(obj['nome completo']);

const arrayObjs = [
  { nome: 'Francisco', disciplina: 'LS' },
  { nome: 'Luiz', disciplina: 'LS' },
  { nome: 'Maria', disciplina: 'Matemática' },
];

for (const obj of arrayObjs) {
  console.log(obj.nome);
}

arrayObjs.forEach((e) => {
  console.log(e.nome);
});

const students = {
  matricula: {
    name: 'fulano',
    email: 'fulano@gmail.com',
  },
  matricula: {
    name: 'sicrano',
    email: 'sicrano@gmail.com',
  },
};

console.log(students.matricula.name);

const cepIFPBJP = `{
  "cep": "58015-435",
  "logradouro": "Avenida Primeiro de Maio",
  "complemento": "de 487/488 ao fim",
  "bairro": "Jaguaribe",
  "localidade": "João Pessoa",
  "uf": "PB",
  "ibge": "2507507",
  "gia": "",
  "ddd": "83",
  "siafi": "2051"
}`;

const objCEP = JSON.parse(cepIFPBJP);

console.log(cepIFPBJP.bairro);
console.log(objCEP.bairro);

const disciplina = {
  titulo: 'LS',
  cargaHoraria: 80,
  f: () => {
    console.log('funcao');
  },
};

console.log(JSON.stringify(disciplina));
