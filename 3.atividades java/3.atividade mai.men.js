const readline = require('readline-sync');

const nu1 = readline.questionInt('digite seu primeiro numero: ');
const nu2 = readline.questionInt('digite seu segundo numero: ');
const nu3 = readline.questionInt('digite seu terceiro numero: ');

console.clear()

if (nu1 == nu2) {
    soma = nu1 + nu2
    console.log(`A soma dos numero e: ${soma}`)
}
if (soma > nu3) {
    console.log('A soma dos numeros e maior que o terceiro numero')

}
if (soma < nu3) {
    console.log('A soma dos numeros e menor que o terceiro numero')

}

