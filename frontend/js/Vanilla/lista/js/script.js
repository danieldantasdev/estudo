const h1 = document.querySelector('.h1')
const ul = document.querySelector('.ul')
const li = document.querySelector('.li')

const mockList = ['Daniel', 'Alvaro', 'Octavio']
const mockData = [
  {
    name: 'daniel',
  },
  {
    name: 'octavio',
  },
]

// for (let i = 0; i < mockData; i++) {
//   console.log(i)
//   li.innerHTML = i
// }

for (let i of mockList) {
  const c = document.createElement('li')
  c.appendChild = i.name
  console.log(c)
}
