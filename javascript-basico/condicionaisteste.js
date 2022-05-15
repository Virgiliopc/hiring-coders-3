var nome = "VP";

/*if (nome === "VP") {
  console.log("Legal!Seu nome é este mesmo!");
} else if (nome === "Pires") {
  console.log("Tudo bem! Você também serve. ");
} else {
  console.log("Que pena! Seu nome não é VP! ");
}*/

switch (nome) {
  case 'VP':
    console.log("Legal!Você é o VP mesmo!");
    break;
  case "Pires":
    console.log("Ah! Você também serve.");
    break;
  default:
    console.log("Que pena! Você não é quem estou procurando! ");
}
