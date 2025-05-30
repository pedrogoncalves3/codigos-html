const readline = require('readline-sync'); 


const a = readline.questionInt('Digite seu Primeiro numero: '); 
const b = readline.questionInt('Digite seu segundo numero: '); 
console.clear()

const somar = (a,b) =>  a + b


const subtrair = (a,b) => {
    return a - b
}

const divisao = (a,b) => a / b



const multiplicacao = (a,b) => {
    return a * b
}

const soma = somar(a,b)
const subrtracao = subtrair(a,b)
const divisa = divisao(a,b)
const vezes = multiplicacao(a,b)

console.log(`Soma ${soma}`)
console.log(`Subtração ${subrtracao}`)
console.log(`Divisão ${divisa}`)
console.log(`Multiplicaçao ${vezes}`)
