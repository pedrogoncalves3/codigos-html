const readline = require('readline-sync');


const nu1 = readline.questionInt('digite seu segundo numero: ');


console.clear()

if (nu1 % 2 === 0) {
    console.log(`${nu1} O numero e par`)

} else if (nu1) {
    console.log('È par')
}



