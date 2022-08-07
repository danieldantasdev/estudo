/* Métodos com strings */

const NOME: string = 'daniel'
const SOBRENOME: string = 'Abreu Dantas'

const NOMECOMPLETO = `O nome da pessoa é ${NOME} ${SOBRENOME}`

console.log(NOMECOMPLETO)

console.log(NOME.substring(0, 2))
console.log(NOME.length)
console.log(NOME.replace('d', 'D'))
console.log(SOBRENOME.split(' ', 2))
console.log(SOBRENOME.trim())
console.log(NOME.toLowerCase())
console.log(NOME.indexOf('d'))
console.log(NOME.charAt(1))
console.log(NOME.slice(0, 4))
console.log(NOME.match('daniel'))

/* Métodos com Array */

const FRUTAS = ['banana', 'Maçã', 'laranja', 'uva', 'pera']

console.log(FRUTAS.join(' - '))
console.log(FRUTAS.reverse())
console.log(FRUTAS.sort())
console.log(FRUTAS.sort((a, b) => a.length - b.length))
console.log(FRUTAS.sort((a, b) => a.localeCompare(b)))
console.log(FRUTAS.sort((a, b) => a.localeCompare(b, 'pt-BR')))
console.log(FRUTAS.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' })))
console.log(FRUTAS.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'accent' })))
console.log(FRUTAS.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'variant' })))
console.log(FRUTAS.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'case' })))
console.log(FRUTAS.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'case', ignorePunctuation: true })))
console.log(
    FRUTAS.sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'case', ignorePunctuation: true, numeric: true })),
)
console.log(FRUTAS.map((fruta) => fruta.toUpperCase()))
console.log(FRUTAS.map((fruta) => fruta.toLowerCase()))
console.log(FRUTAS.map((fruta) => fruta.toLocaleUpperCase()))
console.log(FRUTAS.map((fruta) => fruta.toLocaleLowerCase()))
console.log(FRUTAS.map((fruta) => fruta.toLocaleUpperCase('pt-BR')))
console.log(FRUTAS.map((fruta) => fruta.toLocaleLowerCase('pt-BR')))
console.log(FRUTAS.filter((fruta) => fruta.length > 5))
console.log(FRUTAS.filter((fruta) => fruta.length < 5))
console.log(FRUTAS.filter((fruta) => fruta.length == 5))
console.log(FRUTAS.filter((fruta) => fruta.length != 5))
console.log(FRUTAS.filter((fruta) => fruta.length >= 5))
console.log(FRUTAS.filter((fruta) => fruta.length <= 5))
console.log(FRUTAS.filter((fruta) => fruta.length > 5 && fruta.length < 10))
console.log(FRUTAS.filter((fruta) => fruta.length > 5 || fruta.length < 10))
console.log(FRUTAS.filter((fruta) => fruta.length > 5 || (fruta.length < 10 && fruta.length > 3)))
console.log(FRUTAS.filter((fruta) => fruta.length > 5 || (fruta.length < 10 && fruta.length > 3 && fruta.length < 7)))
console.log(
    FRUTAS.filter(
        (fruta) => fruta.length > 5 || (fruta.length < 10 && fruta.length > 3 && fruta.length < 7 && fruta.length > 1),
    ),
)
console.log(
    FRUTAS.filter(
        (fruta) =>
            fruta.length > 5 ||
            (fruta.length < 10 && fruta.length > 3 && fruta.length < 7 && fruta.length > 1 && fruta.length < 4),
    ),
)
console.log(FRUTAS.forEach((fruta) => console.log(fruta)))
console.log(FRUTAS.every((fruta) => fruta.length > 5))
console.log(FRUTAS.some((fruta) => fruta.length > 5))
console.log(FRUTAS.some((fruta) => fruta.length > 10))
console.log(FRUTAS.some((fruta) => fruta.length > 10 && fruta.length < 15))
console.log(FRUTAS.some((fruta) => fruta.length > 10 || fruta.length < 15))
console.log(FRUTAS.some((fruta) => fruta.length > 10 || (fruta.length < 15 && fruta.length > 3)))
console.log(FRUTAS.push('limão'))
console.log(FRUTAS.pop())
console.log(FRUTAS.unshift('laranja'))
console.log(FRUTAS.shift())
console.log(FRUTAS.splice(1, 1, 'limão'))
console.log(FRUTAS.splice(1, 1))

/* Métodos com número */

const NUMERO: number = 10.4
const NUMERO2: number = 20
const NUMERO3: number = 30

const SOMA = NUMERO + NUMERO2
const SUBTRACAO = NUMERO - NUMERO2
const MULTIPLICACAO = NUMERO * NUMERO2
const DIVISAO = NUMERO / NUMERO2
const RESTO = NUMERO % NUMERO2
const POTENCIA = NUMERO ** NUMERO2

console.log(SOMA)
console.log(SUBTRACAO)
console.log(MULTIPLICACAO)
console.log(DIVISAO)
console.log(RESTO)
console.log(POTENCIA)

console.log(Math.PI)
console.log(Math.E)
console.log(Math.round(NUMERO))
console.log(Math.ceil(NUMERO))
console.log(Math.floor(NUMERO))
console.log(Math.trunc(NUMERO))
console.log(Math.abs(NUMERO))
console.log(Math.pow(NUMERO, NUMERO2))
console.log(Math.sqrt(NUMERO))
console.log(Math.cbrt(NUMERO))
console.log(Math.sign(NUMERO))
console.log(Math.sin(NUMERO))
console.log(Math.cos(NUMERO))
console.log(Math.tan(NUMERO))
console.log(Math.asin(NUMERO))
console.log(Math.acos(NUMERO))
console.log(Math.atan(NUMERO))
console.log(Math.atan2(NUMERO, NUMERO2))
console.log(Math.exp(NUMERO))
console.log(Math.expm1(NUMERO))
console.log(Math.log(NUMERO))
console.log(Math.log10(NUMERO))
console.log(Math.log1p(NUMERO))
console.log(Math.random())
console.log(Math.max(NUMERO, NUMERO2, NUMERO3))
console.log(Math.min(NUMERO, NUMERO2, NUMERO3))
console.log(Math.round(Math.random() * (NUMERO - NUMERO2) + NUMERO2))
