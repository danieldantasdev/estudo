const sete: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#sete')
const oito: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#oito')
const nove: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#nove')
const divisao_real: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#divisao_real')
const raiz: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#raiz')
const quatro: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#quatro')
const cinco: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#cinco')
const seis: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#seis')
const multiplicacao: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#multiplicacao')
const divisao: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#divisao')
const um: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#um')
const dois: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#dois')
const tres: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#tres')
const soma: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#soma')
const zero: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#zero')
const zero_zero: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#zero_zero')
const ponto: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#ponto')
const limpar: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#limpar')
const igual: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#igual')
const subtracao: HTMLButtonElement = <HTMLButtonElement>document.querySelector('#subtracao')
const resultado: HTMLHeadingElement = <HTMLHeadingElement>document.querySelector('#resultado')

const characters: string[] = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '00',
  '.',
  ',',
  '=',
  '-',
  '+',
  '%',
  '/',
  '*',
  '√',
  'C',
]

var newArray: string[] = []

for (const character of characters) {
  if (character === '1') {
    um.addEventListener('click', (e: Event) => {
      newArray.push(um.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '2') {
    dois.addEventListener('click', (e: Event) => {
      newArray.push(dois.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '3') {
    tres.addEventListener('click', (e: Event) => {
      newArray.push(tres.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '4') {
    quatro.addEventListener('click', (e: Event) => {
      newArray.push(quatro.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '5') {
    cinco.addEventListener('click', (e: Event) => {
      newArray.push(cinco.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '6') {
    seis.addEventListener('click', (e: Event) => {
      newArray.push(seis.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '7') {
    sete.addEventListener('click', (e: Event) => {
      newArray.push(sete.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '8') {
    oito.addEventListener('click', (e: Event) => {
      newArray.push(oito.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '9') {
    nove.addEventListener('click', (e: Event) => {
      newArray.push(nove.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '0') {
    zero.addEventListener('click', (e: Event) => {
      newArray.push(zero.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '00') {
    zero_zero.addEventListener('click', (e: Event) => {
      newArray.push(zero_zero.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '.') {
    ponto.addEventListener('click', (e: Event) => {
      newArray.push(ponto.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === 'C') {
    limpar.addEventListener('click', (e: Event) => {
      //   newArray = ['']
      //   setSessionStorage('CALCULADORA', String(newArray))
      clearSessionStorage()
      e.preventDefault()
    })
  } else if (character === '+') {
    soma.addEventListener('click', (e: Event) => {
      newArray.push(soma.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '-') {
    subtracao.addEventListener('click', (e: Event) => {
      newArray.push(subtracao.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '/') {
    divisao.addEventListener('click', (e: Event) => {
      newArray.push(divisao.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '%') {
    divisao_real.addEventListener('click', (e: Event) => {
      newArray.push(divisao_real.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '√') {
    raiz.addEventListener('click', (e: Event) => {
      newArray.push(raiz.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '*') {
    multiplicacao.addEventListener('click', (e: Event) => {
      newArray.push(multiplicacao.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  } else if (character === '=') {
    igual.addEventListener('click', (e: Event) => {
      newArray.push(igual.value)
      setSessionStorage('CALCULADORA', String(newArray))
      e.preventDefault()
    })
  }

  const setSessionStorage = (key: string, value: string): void => {
    //   let storage: Storage = new Storage()
    JSON.stringify(sessionStorage.setItem(key, value))
  }

  const clearSessionStorage = (): void => {
    sessionStorage.clear()
  }
}

const getSessionStorage = (key: string): string => {
  //   let storage: Storage = new Storage()

  let fetch = String(sessionStorage.getItem(key))
  let fetchFormat = fetch.split(',').join(' ')
  if (typeof fetchFormat === 'string') {
    alert('oi')
  }
  console.log(fetchFormat)
  return fetchFormat
}

resultado.innerHTML = getSessionStorage('CALCULADORA')
