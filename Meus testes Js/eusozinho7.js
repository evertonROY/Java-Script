alert('Sejá bem vindo!')
var nome= prompt('Qual o seu nome?')
var idade= prompt('Qual a sua idade?')
var altura= prompt('Qual a sua altura?')
var peso= prompt('Qual o seu peso?')
var n1= Number(prompt('Digite um numero'))
var n2= Number(prompt('Digite outro numero'))
var s= (n1 + n2)

document.write(`Nome: <strong>${nome.toUpperCase()}</strong> </br>
Idade: <strong>${idade}</strong></br> 
Altura: <strong>${altura}</strong></br>
Peso: <strong> ${peso}</strong></br>`)
document.write(`Seu nome tem ${nome.length} letras</br>`)

document.write(`A soma de ${n1} + ${n2} = <strong>${s}</strong>`)