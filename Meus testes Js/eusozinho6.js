Alert('Sejá bem vindo!')
var nome = window.prompt('Qual o seu nome?')
var idade = window.prompt('Qual a sua idade?')
var altura = window.prompt('Qual a sua altura?')
var n1 = Number(prompt('Digite um numero para a soma'))
var n2 = Number(prompt('Digite outro numero para a soma'))
var s = n1 + n2
write(`<strong>Nome:</strong> ${nome.toUpperCase()} </br> <strong>Idade:</strong>${idade}</br> <strong>Altura:</strong> ${altura}</br>`)
write(`<strong>seu nome tem:</strong> ${nome.length}<strong> letras </strong></br>`)
write(`<strong>A soma de ${n1} + ${n2} = </strong> ${s}`)