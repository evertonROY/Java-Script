window.alert('Sejá bem vindo!')
window.confirm('Deseja entrar?')
var nome = prompt('Qual é o seu nome?')
var idade = prompt('Qual é a sua idade?')
var altura = prompt('Qual é a sua altura?')
var n1 = Number(prompt('Digite um numero'))
var n2 = Number(prompt('Digite outro numero'))
var s = n1 + n2
document.write(`olá <strong>${nome.toUpperCase()}</strong> tudo bem?</br> o seu nome tem ${nome.length} letras e
         verifico que a sua idade é <strong>${idade}</strong> e a sua altura é <strong>${altura}</strong>.</br>`)
document.write(`O resultado da soma de ${n1} + ${n2} = ${s}`)