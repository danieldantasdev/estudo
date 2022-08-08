const FETCH_COUNTY = async (name) => {
    await fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then((data) => {
            if (data !== undefined) {
                return data
            } else {
                return 'Country not found'
            }
        })
        .catch((error) => {
            console.log(error)
        })
}

const countryName = document.querySelector('.country__name')
const countryCapital = document.querySelector('.country__capital')
const countryPopulation = document.querySelector('.country__population')
const countryFlag = document.querySelector('.country__flag')

const RENDER_COUNTY = async (name) => {
    let data = await FETCH_COUNTY(name)

    countryName.innerHTML = 'loading...'
    countryCapital.innerHTML = 'loading...'
    countryPopulation.innerHTML = 'loading...'
    countryFlag.src = 'https://i.imgur.com/dJa4Z9q.png'
    if (data !== 'Country not found') {
        countryName.innerHTML = data[0].cca2
    } else {
        countryName.innerHTML = data
        countryCapital.innerHTML = data
        countryPopulation.innerHTML = data
        countryFlag.src = 'https://i.imgur.com/dJa4Z9q.png'
    }
}

FETCH_COUNTY('Poland')
RENDER_COUNTY('Poland')
