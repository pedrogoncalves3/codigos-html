const readline = require('readline-sync'); 


console.clear()

function media() {
    const a = readline.questionInt('Digite seu Primeiro numero: '); 
    const b = readline.questionInt('Digite seu segundo numero: '); 
    
    console.log(`A média dos números:  ${(a + b) / 2}`)
}
media()