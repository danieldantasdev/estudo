const array: number[] = [...Array(20).keys()]

const ul: HTMLUListElement = <HTMLUListElement>document.getElementById('lista')
const li: HTMLLIElement = <HTMLLIElement>document.getElementById('item')

for (let item of array) {
  const newLi: HTMLLIElement = <HTMLLIElement>document.createElement('li')
  newLi.innerHTML = item + ''

  ul.appendChild(newLi)
}

var i = 0
const insereLi = () => {
  const newLi: HTMLLIElement = <HTMLLIElement>document.createElement('li')
  //   newLi.innerHTML = Math.floor(Math.random() * 10) + '';
  newLi.innerHTML = i + ''
  i++

  ul.appendChild(newLi)
}
