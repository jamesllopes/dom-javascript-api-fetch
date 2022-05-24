const input = document.querySelector('.input')

const searchMovie = async (event) => {
    let value = event.target.value
    if (event.key !== 'Enter' || value === '') {
        return initial()
    }
    let valueQuery = input.value.replace(input.value[0], input.value[0].toUpperCase())
    const urlSearch = `https://tmdb-proxy.cubos-academy.workers.dev/3/search/movie?language=pt-BR&include_adult=false&query=${valueQuery}`
    moviesTemp = []
    let responseSearch = await fetch(urlSearch)
    let moviesDataSearch = await responseSearch.json()
    moviesDataSearch.results.forEach(element => {
        return moviesTemp.push(element)
    })
    criarElementos(0, 5)
    input.value = ''
}

input.addEventListener('keydown', searchMovie)
