var nome = prompt('Digite o seu nome!')
var idade = prompt('Digite a sua idade!')
var cidade = prompt('Digite a sua cidade!')
var ganho = prompt('Quanto você ganha?')
var n1 = Number(prompt('Digite o primeiro numero!'))
var n2 = Number(prompt('Agora o segundo numero!'))
var s = n1 + n2
document.write(`Seu nome é <strong>${nome.toUpperCase()}</strong>!<br>
        Sua idade é <strong>${idade.toUpperCase()}</strong>!<br>
        Você mora na cidade <strong>${cidade.toUpperCase()}</strong>!<br>
        Os numeros <strong>${n1} + ${n2}</strong> = <strong>${s}</strong><br>
        você ganha <strong>${ganho.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong>`)