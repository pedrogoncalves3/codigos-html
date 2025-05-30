const alunos = ['marta', 'jose','maria']
console.log('\nExibindo todos os elemneto')
console.log(alunos)

console.log('\nExibindo apenas o primeiro elemneto')
console.log(alunos[0])

console.log('\nExibindo apenas o ultimo elemneto')
console.log(alunos[2])

console.log('\nAdicionando um elemnto no final do vetor')
alunos.push('ana')
console.log(alunos)


console.log('\nAdicionando um elemnto no começo do vetor')
alunos.unshift('ana')
console.log(alunos)


console.log('\nremovendo um elemento no final do vetor')
alunos.pop()
console.log(alunos)


console.log('\nremovendo o terceiro elemnto')
alunos.pop(2)
console.log(alunos)

