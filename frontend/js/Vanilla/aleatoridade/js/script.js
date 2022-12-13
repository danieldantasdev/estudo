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
    nome: 'Renata Dantas',
  },
  {
    id: 4,
    nome: 'Joel',
  },
  {
    id: 5,
    nome: 'Davi',
  },
  {
    id: 6,
    nome: 'Vilma',
  },
  {
    id: 7,
    nome: 'Joaquim',
  },
  {
    id: 8,
    nome: 'Renata Figueiredo',
  },
  {
    id: 9,
    nome: 'Ricardo',
  },
  {
    id: 10,
    nome: 'Ricardinho',
  },
  {
    id: 11,
    nome: 'Renatinho',
  },
]

const nomeGerado = document.querySelector('.nomeGerado')

const gerarNumeros = async () => {
  const numberAleatory = Math.floor(Math.random() * obj.length)

  for (const iterator of obj) {
    if (iterator.id === numberAleatory) {
      nomeGerado.innerHTML = iterator.nome
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
  nomeGerado.innerHTML = ''
  localStorage.clear()
}
