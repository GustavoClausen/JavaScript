function carregar(){
    var mensagem = document.getElementById('msg')
    var imagem = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var horario_dia = document.getElementById('horario-do-dia')
    mensagem.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {

        horario_dia.innerHTML = 'Horário da Manhã'
        imagem.src = 'imagens/manha.jpg'
        document.body.style.background = '#f7f3d6'
        horario_dia.style.color = '#43330f'       

    } else if (hora >= 12 && hora <= 18) {

        horario_dia.innerHTML = 'Horário da Tarde'
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.background = '#a07255'
        horario_dia.style.color = '#ffdfc8'

    } else {

        horario_dia.innerHTML = 'Horário da Noite'
        imagem.src = 'imagens/noite.jpg'
        document.body.style.background = '#2b404c'
        horario_dia.style.color = '#e5f8ff'
    }
}


