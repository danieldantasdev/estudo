const pokemonName = document.querySelector('.pokemon_name')
const pokemonImage = document.querySelector('.pokemon_image')
const pokemonNumber = document.querySelector('.pokemon_number')
const ButtonPrevious = document.querySelector('.button_previous')
const ButtonNext = document.querySelector('.button_next')

// const pokemonName = document.getElementById('pokemon_name')
const fetchPokemon = async (pokemon) => {
    const URL = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then((res) => res.json())

    return URL
}

const renderPokemon = async (pokemon) => {
    let data = await fetchPokemon(pokemon)

    pokemonNumber.innerHTML = data.id
    pokemonName.innerHTML = data.name
    pokemonImage.src = data.sprites.front_default
}

const incrementPokemon = async () => {
    const pokemon = (await parseInt(pokemonNumber.innerHTML)) + 1
    renderPokemon(pokemon)
}

const decrementPokemon = async () => {
    const pokemon = (await parseInt(pokemonNumber.innerHTML)) - 1
    renderPokemon(pokemon)
}

// renderPokemon(
//     setInterval(() => {
//         // Math.floor(Math.random() * 151) + 1
//          renderPokemon(Math.floor(Math.random() * 151) + 1)
//     }, 500),
// )

renderPokemon('1')

// var fetchPokemon3 = fetchPokemon2()

// pokemonName.innerHTML = data.name

// fetchPokemon('1')

// function loader() {
//     document.querySelector('.load-container').classList.add('fade-out')
// }

// function fadeOut() {
//     setInterval(loader, 1000)
// }

// window.onload = fadeOut()
