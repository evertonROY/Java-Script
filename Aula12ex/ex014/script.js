function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`
    if (hora >= 0 && hora <12){
        img.src = 'fotomanha.png'
        document.body.style.background = '#FFE4B5'
    }else if(hora < 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#FF8C00'
    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#2F4F7F'
    }


    
} 