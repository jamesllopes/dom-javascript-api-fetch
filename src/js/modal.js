const movieDiv = document.querySelectorAll('.movie')
const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal__title')
const modalDescription = document.querySelector('.modal__description')
const modalImg = document.querySelector('.modal__img')
const modalAverage = document.querySelector('.modal__average')
const modalGenre = document.querySelector('.modal__genres')

let idMovie = ''
let responseData;
const listaMovie = async () => {
    let responseLista = await fetch(`https://tmdb-proxy.cubos-academy.workers.dev/3/movie/${idMovie}?language=pt-BR`)
    responseData = await responseLista.json()
}

const createModal = async (event) => {
    let movieName = event.target.alt;
    const movie = moviesTemp.filter(element => {
        return element.title === movieName
    })
    idMovie = movie[0].id
    await listaMovie()
    dataModal(responseData)
}

moviesDiv.addEventListener('click', createModal)

const dataModal = (data) => {
    const genres = data.genres.map(name => name.name)
    genres.forEach(genre => {
        let genreSpan = document.createElement('span')
        genreSpan.classList.add('modal__genre')
        genreSpan.textContent = genre
        modalGenre.append(genreSpan)
    });

    modalAverage.textContent = data.vote_average
    modalTitle.textContent = data.title
    modalDescription.textContent = data.overview
    modalImg.src = data.backdrop_path;
    modal.classList.remove('hidden')
}

modal.addEventListener('click', () => {
    modal.classList.add('hidden')
    const modalGenre = document.querySelectorAll('.modal__genre')
    modalGenre.forEach(genre => {
        genre.remove()
    })
})



