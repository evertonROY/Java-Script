const testprom = new Promise((resolve, reject) => {
    const lis = {
        nome: "Everton",
        idade: 22,
        estado: "Bahia"
    }

    if(lis.nome == "Everton"){
        resolve(lis.nome)
    }else{
        reject("Não")
    }
})

testprom.then((valor) => {
    console.log("Sucesso - " + valor)
}).catch((valor) => {
    console.log('Erro: ' + valor)
})