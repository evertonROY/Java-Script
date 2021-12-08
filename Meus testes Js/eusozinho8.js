var nome = prompt('Qual o seu nome')
var idade = prompt('Qual a sua idade')
var n1 = Number(prompt('Digite um numero'))
var n2 = Number(prompt('Digite outro numero'))
var s = n1 + n2
document.write(`Olá <strong>${nome.toUpperCase()}</strong></br>
         a sua idade é <strong>${idade}</strong><br>
        o seu nome tem <strong>${nome.length} letras</strong> </br>
        o resultado da soma de <strong>${n1}</strong> + <strong>${n2}</strong> = <strong>${s.toFixed(3)}</strong><br>
        o numero com 2 casas decimais é ${n1.toFixed(2)}`)