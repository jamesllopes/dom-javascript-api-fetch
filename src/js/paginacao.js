const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let start = 0
let end = 5
buttonPrev.addEventListener('click', () => {
    start -= 5
    end -= 5
    if (start < 0) {
        start = moviesTemp.length - 5
        end = moviesTemp.length
    }
    criarElementos(start, end)
})

buttonNext.addEventListener('click', () => {
    end += 5
    start += 5
    if (end > moviesTemp.length) {
        start = 0
        end = 5
    }
    criarElementos(start, end)
})