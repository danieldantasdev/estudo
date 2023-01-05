const countryName = document.getElementById('country_name')

const fetchPokemon = async (name) => {
    await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then((data) => {
            if (data !== undefined) {
                countryName.innerHTML = data[0].name.common
            } else {
                countryName.innerHTML = 'Pokemon not found'
            }
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

const renderPokemon = async (name) => {
    let data = await fetchPokemon(name)

    if (data !== undefined) {
        countryName.innerHTML = data[0].name.common
    } else {
        countryName.innerHTML = 'Pokemon not found'
    }
}

// fetchPokemon(
//     setInterval(() => {
//         setTimeout(() => {
//             countryName.innerHTML = 'loading...'
//         }, 1000)
//         fetchPokemon(Math.floor(Math.random() * 802) + 1)
//     }, 2000),
// )

// fetchPokemon(pokemon)

renderPokemon('Brazil')
// fetchPokemon('Brazil')
