const readline = require('readline-sync');


// laço de repetição for:

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// solicite para o usuario inserir um numero para mostrar a tabuada de multiplicação

const nu1 = readline.questionInt('digite o numero que deseja ver da tabuada: ');

// exibindo a tabuada

for (let i = 1; i <= 10; i++) {
    console.log(` ${nu1} x ${i} = ${nu1 * i}`);
}
