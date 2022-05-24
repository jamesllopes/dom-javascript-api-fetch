const moviesDiv = document.querySelector(".movies")
const urlApi = 'https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR'

let moviesTemp = []
const getMovies = async () => {
    let response = await fetch(urlApi)
    let moviesData = await response.json()
    moviesTemp = moviesData.results
}

const criarElementos = (start, end) => {
    moviesDiv.innerHTML = ''
    const temp = moviesTemp.slice(start, end)
    temp.forEach(data => {
        const cardMovies = document.createElement('div')
        cardMovies.classList.add("movie")
        const posterMovie = document.createElement('img')
        posterMovie.classList.add('movie__card')
        posterMovie.src = data.poster_path
        posterMovie.alt = data.title
        const titleMovie = document.createElement('span')
        titleMovie.textContent = data.title
        titleMovie.classList.add('movie__title')
        const infoMovie = document.createElement('div')
        infoMovie.classList.add('movie__info')
        const ratingMovie = document.createElement('span')
        ratingMovie.classList.add('movie__rating')
        ratingMovie.textContent = data.vote_average
        const star = document.createElement('img')
        star.src = '../assets/estrela.svg'
        cardMovies.append(posterMovie, infoMovie)
        infoMovie.append(titleMovie, star, ratingMovie)
        moviesDiv.append(cardMovies)
    })
}

const initial = async () => {
    await getMovies()
    criarElementos(0, 5)
}

initial()