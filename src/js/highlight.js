const divHighlight = document.querySelector(".highlight")
const highlightTitle = document.querySelector('.highlight__title')
const highlightRating = document.querySelector('.highlight__rating')
const highlightGenres = document.querySelector('.highlight__genres')
const highlightLaunch = document.querySelector('.highlight__launch')
const highlightDescription = document.querySelector('.highlight__description')

const highlightVideo = document.querySelector('.highlight__video')
const highlightVideoLink = document.querySelector('.highlight__video-link')

const urlHighlight = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969?language=pt-BR'
const urlVideo = 'https://tmdb-proxy.cubos-academy.workers.dev/3/movie/436969/videos?language=pt-BR'


const getInfoMovie = async () => {
    let responseHighlight = await fetch(urlHighlight)
    let hightlightData = await responseHighlight.json()
    criarHighlight(hightlightData)
}

let keyMovie = []
const getMovieKey = async () => {
    let responseMovie = await fetch(urlVideo)
    let movieLink = await responseMovie.json()
    keyMovie = movieLink.results
}

const criarHighlight = (data) => {
    const genres = data.genres
    let genreLista = []
    genres.forEach(genre => {
        genreLista.push(genre.name)
    });

    const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    let getDate = new Date(data.release_date)
    let formatDate = (getDate.getDate() + ' ' + months[getDate.getMonth()] + ' ' + getDate.getFullYear())

    highlightVideo.style.backgroundImage = `url(${data.backdrop_path})`
    highlightVideoLink.href = `https://www.youtube.com/watch?v=${keyMovie[0].key}`
    highlightTitle.textContent = data.title
    highlightRating.textContent = data.vote_average
    highlightGenres.textContent = genreLista.join(', ')
    highlightLaunch.textContent = formatDate
    highlightDescription.textContent = data.overview
}

const initialHighlight = async () => {
    await getMovieKey()
    await getInfoMovie()
}

initialHighlight()