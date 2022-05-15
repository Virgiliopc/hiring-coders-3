const pessoa = {
  nome: "VP",
  sobrenome: "Pires",
  idade: 46,
  profissao: "contador"
};

console.log(pessoa);
/*
let nome = pessoa.nome;
let sobrenome = pessoa.sobrenome;
let idade = pessoa.idade;
let profissao = pessoa.profissao;
*/

let { nome, idade, profissao, endereco} = pessoa;

console.log(nome, idade, profissao, endereco);