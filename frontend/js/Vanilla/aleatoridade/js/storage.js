export default class Storage {
  getData = (key) => {
    JSON.parse(localStorage.getItem(key))
  }

  setData = (key, data) => {
    JSON.stringify(localStorage.setItem(key, data))
  }
}
