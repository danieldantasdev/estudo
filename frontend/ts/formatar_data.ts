// primeiro jeito de fazer

const data = new Date().toLocaleString()
console.log(data)

var dataFormatada = data.split(' ')[0].replace(/\//g, '-')
console.log(dataFormatada)

var horaFormatada = data.split(' ')[1]
console.log(horaFormatada)

//segundo jeito de fazer

const data2 = new Date().toString()
console.log(data2)

var ano = data2.split(' ')[3]
var mes = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'][new Date().getMonth()]
// var mes = data.split(" ")[1] ;
var dia = data2.split(' ')[2]

var hora = data2.split(' ')[4]

var dataCompleta = dia + '/' + mes + '/' + ano
console.log(dataCompleta)
console.log(hora)

//terceiro modo de fazer

const data3 = new Date()
console.log(data3)

var dia3: number = data3.getDate()
var mes3: number = data3.getMonth() + 1
var ano3: number = data3.getFullYear()
// var dia = data.getDate().toString();

const formataData = (dia3: number, mes3: number, ano3: number) => {
    if (dia3 < 10) {
        dia3 = 0 + dia3
    }

    if (mes3 < 10) {
        mes3 = 0 + mes3
    }
    return dia3 + '/' + mes3 + '/' + ano3
}

formataData(dia3, mes3, ano3)
console.log(formataData(dia3, mes3, ano3))

var dataCompleta = dia3 + '/' + mes3 + '/' + ano3
console.log(dataCompleta)

var hora3: number = data3.getHours()
console.log(hora3)

var minuto3: number = data3.getMinutes()
console.log(minuto3)

var segundo3: number = data3.getSeconds()
console.log(segundo3)

var milisegundo3: number = data3.getMilliseconds()
console.log(milisegundo3)

const formataHora = (hora3: number, minuto3: number, segundo3: number, milisegundo3: number) => {
    if (hora3 < 10) {
        hora3 = 0 + hora3
    }
    if (minuto3 < 10) {
        minuto3 = 0 + minuto3
    }
    if (segundo3 < 10) {
        segundo3 = 0 + segundo3
    }
    if (milisegundo3 < 10) {
        milisegundo3 = 0 + milisegundo3
    }
    return hora3 + ':' + minuto3 + ':' + segundo3 + ':' + milisegundo3
}

formataHora(hora3, minuto3, segundo3, milisegundo3)
console.log(formataHora(hora3, minuto3, segundo3, milisegundo3))

console.log(`Hoje é dia ${dia}/${mes}/${ano}`)

console.log(`Agora são ${hora3}:${minuto3}:${segundo3}.${milisegundo3}`)

console.log(mes)
console.log(typeof ano)

console.log(typeof ano)
console.log(typeof mes)

// function FormataStringData(data) {
//     var dia  = data.split("/")[0];
//     var mes  = data.split("/")[1];
//     var ano  = data.split("/")[2];

//     return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
//     // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
//   }

//   console.log(FormataStringData('02/03/2018'));

let date = new Date()

console.log(date)

let dateString = date
    .toLocaleString('en-GB', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    })
    .replace(/\//g, '-')
    .replace(/\:/g, ':')

console.log(dateString)

