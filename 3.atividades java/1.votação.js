const readline = require("readline-sync")


let nome = readline.question("Digite seu nome: ")
const idade = readline.questionInt("digite sua idade: ")


if (idade < 16) {
    console.log("Não pode votar!")

} else if (idade > 18) {
    console.log("Voto obrigatorio!")

} else if  (idade == 16 || idade == 17) {
    console.log("voto opcional")

} else if (idade > 64) 
    console.log("não e obrigatorio votar!")
  
