const readline = require('readline-sync');

const nu1 = readline.questionInt('digite seu segundo numero: ');

function positivo_negativo() {
    
    if (nu1 >= 0) {
        console.log('O número e positivo')
    } else if (nu1) {
        console.log('O número e negativo')
    }

}
positivo_negativo()

