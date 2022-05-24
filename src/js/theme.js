const container = document.querySelector('.container')
const btnTheme = document.querySelector('.btn-theme')

let theme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'white';

const changeTheme = () => {
    container.style.setProperty('--background-color-default', theme === 'white' ? 'var(--background-color-light)' : 'var(--background-color-dark)')
    container.style.setProperty('--color-default', theme === 'white' ? 'var(--color-light)' : 'var(--color-dark)')
    container.style.setProperty('--highlight-background-default', theme === 'white' ? 'var(--highlight-background-light)' : 'var(--highlight-background-dark')
    container.style.setProperty('--highlight-color-default', theme === 'white' ? 'var(--highlight-color-light)' : 'var(--highlight-color-dark')
    container.style.setProperty('--highlight-description-default', theme === 'white' ? 'var(--highlight-description-light)' : 'var(--highlight-description-dark')
    localStorage.setItem('theme', theme)
}

const changeButtons = () => {
    theme === 'white' ? btnTheme.src = '../assets/light-mode.svg' : btnTheme.src = '../assets/dark-mode.svg'
    theme === 'white' ? buttonPrev.src = '../assets/seta-esquerda-preta.svg' : buttonPrev.src = '../assets/seta-esquerda-branca.svg'
    theme === 'white' ? buttonNext.src = '../assets/seta-direita-preta.svg' : buttonNext.src = '../assets/seta-direita-branca.svg'
}

changeTheme()
changeButtons()

btnTheme.addEventListener('click', () => {
    theme = localStorage.getItem('theme') === 'dark' ? 'white' : 'dark';
    changeTheme()
    changeButtons()
})

