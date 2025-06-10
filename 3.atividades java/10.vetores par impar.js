const readline = require('readline-sync')

const numeros = []

for(let i = 0; i < 6; i++) {

    let numero = readline.questionInt('Digite seu primeiro numero: ')
    numeros.push(numero);
}
  
// listando os pares
const pares = numeros.filter(numeros => numeros % 2 === 0)
console.log(`Numeros pares:  ${pares}`)
console.log("quantidade de pares: ", pares.length)



const impares = numeros.filter(numero => numero % 2 === 1);
console.log(`Números ímpares: ${impares}`);
console.log("quantidade de impares: ", impares.length)


