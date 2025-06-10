const readline = require('readline-sync')

const numeros = []

for(let i = 0; i < 3; i++) {

    let numero = readline.questionInt('Digite seu primeiro numero: ')
    numeros.push(numero);
}
  
const positivo = numeros.filter(numero => numero > 0);
console.log(`Notas:  ${numeros}`);

const media = positivo.reduce((media,atual) => media + atual,0)
console.log(`media: ${media /3}`)


