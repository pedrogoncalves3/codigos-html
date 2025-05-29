const readline = require("readline-sync")


const nu1 = readline.questionInt("Digite o primeiro numero: ")
const nu2 = readline.questionInt("digite o segundo numero: ")

if (nu1 == nu2) {
    soma = nu1 + nu2
    console.log(soma)
}
if (nu1 != nu2) {
    multiplicacao = nu1 * nu2
    console.log(multiplicacao)
}
