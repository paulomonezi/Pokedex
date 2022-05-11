const selectionListPokemon = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.card-pokemon')

selectionListPokemon.forEach(pokemon => {


    pokemon.addEventListener('click', () => {
        const openedCard = document.querySelector('.open')  
        openedCard.classList.remove('open')

        const idSelectedPoke = pokemon.attributes.id.value
        const cardToShow = 'card-' + idSelectedPoke
        const toOpenCard = document.getElementById(cardToShow)
        toOpenCard.classList.add('open')

        const openedCardList = document.querySelector('.active')
        openedCardList.classList.remove('active')

        const toOpenCardList = document.getElementById(idSelectedPoke)
        toOpenCardList.classList.add('active')
    })
})