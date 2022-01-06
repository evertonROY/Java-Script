function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    msg.innerHTML = `Agora são ${hora}:${min}:${sec}`
    if (hora >= 0 && hora <12){
        opa.innerHTML = ('bom dia')
    }else if(hora < 18){
        opa.innerHTML = ('bom dtarde')
    }else{
        opa.innerHTML = ('bom noite')
    }
}