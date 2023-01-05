const pokemonName = document.querySelector('.pokemon_name')

const pokemonNumber = document.querySelector('.pokemon_number')

const pokemonType = document.querySelector('.pokemon_type')

const pokemonImage = document.querySelector('.pokemon_image')

const pokemonForce = document.querySelector('.pokemon_force')

const pokemonForm = document.querySelector('.pokemon_form')

const inputSeacrh = document.querySelector('.input_search')

const fetchPokemon = async (pokemon) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
        })
        .then((data) => {
            if (data !== undefined) {
                pokemonName.innerHTML = data.name
                pokemonNumber.innerHTML = data.id
                pokemonType.innerHTML = data.types[0].type.name
                pokemonImage.src =
                    data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
                pokemonForce.innerHTML = data.stats[0].base_stat + '%'
            } else {
                pokemonName.innerHTML = 'Pokemon not found'
                pokemonNumber.innerHTML = 'Pokemon not found'
                pokemonType.innerHTML = 'Pokemon not found'
                pokemonForce.innerHTML = 'Pokemon not found'
            }
            console.log(data)
        })
        .catch((error) => {
            console.log(error)
        })
}

const renderPokemon = async (pokemon) => {
    let data = await fetchPokemon(pokemon)
    pokemonNumber.innerHTML = 'loading...'
    pokemonName.innerHTML = 'loading...'
    pokemonType.innerHTML = 'loading...'
    pokemonForce.innerHTML = 'loading...'

    if (data !== undefined) {
        pokemonName.innerHTML = data.name
        pokemonNumber.innerHTML = data.id
        pokemonType.innerHTML = data.types[0].type.name
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
    } else {
        pokemonName.innerHTML = 'Pokemon not found'
        pokemonNumber.innerHTML = 'Pokemon not found'
        pokemonType.innerHTML = 'Pokemon not found'
        pokemonImage.src = 'https://i.imgur.com/dJa4Z9q.png'
    }
}

pokemonForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const pokemon = inputSeacrh.value
    fetchPokemon(pokemon)
})

fetchPokemon(
    setInterval(() => {
        setTimeout(() => {
            pokemonNumber.innerHTML = 'loading...'
            pokemonName.innerHTML = 'loading...'
            pokemonType.innerHTML = 'loading...'
            pokemonForce.innerHTML = 'loading...'
            pokemonImage.src = ''
        }, 1000)
        fetchPokemon(Math.floor(Math.random() * 802) + 1)
    }, 2000),
)

// fetchPokemon(pokemon)

// renderPokemon(pokemon)
