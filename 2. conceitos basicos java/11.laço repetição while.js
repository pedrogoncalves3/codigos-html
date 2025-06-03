const readline = require('readline-sync');

// laço de repetição while

let i = 1

while (i <= 5) {
    console.log(i)
    i++
}

// exercicio
// solicitar uma Nota 
// menor q 0 e maior q 10 fazer pergunta

nu1 = readline.questionInt('Digite uma nota: ')

while(nu1) {
    if (nu1 < 0 || nu1 > 10 ) {
    nu1 = readline.questionInt("Digite outro numero: ")
    } else {
    break
}    
}