const obj = [
  {
    id: 1,
    nome: 'Daniel',
  },
  {
    id: 2,
    nome: 'Eve',
  },
  {
    id: 3,
    nome: 'Renata',
  },
  {
    id: 4,
    nome: 'Davi',
  },
  {
    id: 5,
    nome: 'Joaquim',
  },
  {
    id: 6,
    nome: 'Vilma',
  },
  {
    id: 7,
    nome: 'Renata figueiredo',
  },
  {
    id: 8,
    nome: 'Ricardinho',
  },
  {
    id: 9,
    nome: 'Renatinho',
  },
  {
    id: 10,
    nome: 'Joel',
  },
]

const div = document.querySelector('.div')

const gerarNumeros = async () => {
  const numberAleatory = Math.floor(Math.random() * 10)

  for (const iterator of obj) {
    if (iterator.id === numberAleatory) {
      div.innerHTML = iterator.nome
      await this.setData('participantes', JSON.stringify(obj))
    } //else {
    //   div.innerHTML = 'Estamos tentando deixar aleatorio'
    // }
  }
}

getData = (key) => {
  localStorage.getItem(key)
}

setData = (key, data) => {
  localStorage.setItem(key, data)
}

clearData = () => {
  div.innerHTML = ''
  localStorage.clear()
}
