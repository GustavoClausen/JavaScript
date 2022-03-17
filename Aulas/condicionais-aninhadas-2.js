var data_e_hora_do_sistema = new Date()

var hora = data_e_hora_do_sistema.getHours()

console.log(`Agora são ${hora} horas.`)

if (hora < 12){
    console.log('Bom dia!')
}else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}