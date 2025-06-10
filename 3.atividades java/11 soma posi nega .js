const readline = require('readline-sync')

const numeros = []

for(let i = 0; i < 5; i++) {

    let numero = readline.questionInt('Digite seu primeiro numero: ')
    numeros.push(numero);
}
  
// listando os pares
const negativos = numeros.filter(numeros => numeros < 0)
console.log(`Numeros negativos:  ${negativos}`)
console.log("quantidade de negativos: ", negativos.length)



const positivo = numeros.filter(numero => numero > 0);
console.log(`Números positivos: ${positivo}`);
console.log("quantidade de positivos: ", positivo.length)

const soma = positivo.reduce((soma,atual) => soma + atual,0)
console.log(`a soma dos números positivos: ${soma}`)


