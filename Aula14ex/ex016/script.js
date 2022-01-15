var ini = document.getElementById('inic')
var fim = document.getElementById('fim')
var pas = document.getElementById('pass')
var res = document.getElementById('res')
var n = 1

function Contar() {
    var fi = Number(fim.value)
    do {
        res.innerHTML = `opa ${fi}`
        n++
    }while (n < fi)

}