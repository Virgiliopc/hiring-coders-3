let meuNome = "VP";
let meuSobrenome = "Pires";
let minhaProfissao = "contador";

// sem template-string
console.log("Olá, meu nome é " + meuNome + " " + meuSobrenome + " " + "e minha profissão é " + minhaProfissao);

console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`);

console.log(`O resultado da soma de 1 + 1 = ${1+1}`);

console.log(`O objeto json ${{chave: "valor"}}`); // literal de um objeto

let meuObjeto = {
  chave: "novo valor"
}