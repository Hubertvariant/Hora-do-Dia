function mostrar(){
    var agora = new Date()
var hora = agora.getHours()
var res = window.document.querySelector('p#msgh')
var img = window.document.querySelector('img#imagem')
if (hora <= 12 && hora >= 5) {
    window.document.body.style.background = '#f1e3b1ff'
    res.innerHTML = `Agora são ${hora} Horas. Bom Dia!`
    img.src = 'manha.jpg'
}else if (hora <= 18 && hora > 12) {
    window.document.body.style.background = '#dc9b6f'
     res.innerHTML = `Agora são ${hora} Horas. Boa Tarde!`
     img.src = 'tarde.jpg'
}else {
    window.document.body.style.background = '#1c4377ff'
     res.innerHTML = `Agora são ${hora} Horas. Boa Noite!`
     img.src = 'noite.jpg'
}

}

