const mypromises = new Promise((resolve, reject) => {
    const nome = "Everton"

    if (nome == 'Everton') {
        resolve("EXATO")
    } else {
        reject("Errado!!!")
    }
})

mypromises.then((resp) => {
    console.log(resp)
})

// Envadeamento de then's para modificar os dados

const mypromises2 = new Promise((resolve, reject) => {
    const nome = "Everton"

    if (nome == 'Everton') {
        resolve("EXATO")
    } else {
        reject("Errado!!!")
    }
})

mypromises2.then((data) => {
    return data.toLowerCase()
})
    .then((stringModificada) => {
        console.log(stringModificada)
    })

// Retorno do catch 

const mypromises3 = new Promise((resolve, reject) => {
    const nome = "joao"

    if (nome == 'Everton') {
        resolve("EXATO")
    } else {
        reject("Errado!!!")
    }
});

mypromises3.then((data) => {
    console.log(data)
}).catch((err) => {
    console.log('Aconteceu um erro: ' + err)
})

// Resolver varias promessas

const p1 = new Promise((resolve, reject) => {
    resolve('p1 ok!')

})
const p2 = new Promise((resolve, reject) => {
    resolve('p2 ok!')
})


const p3 = new Promise((resolve, reject) => {
    resolve('p3 ok!')
})

const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data)
})

// Resolver varias promessas de forma assincrona com tempo 

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('p4 ok!')
    }, 2000)

})

const p5 = new Promise((resolve, reject) => {
    resolve('p5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('p6 ok!')
})


const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data)
})
