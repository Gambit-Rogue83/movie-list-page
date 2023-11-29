console.log('hello world')

const message = document.querySelector('aside')

const addMovie = evt =>{
    evt.preventDefault()
    let inputField = document.querySelector('input')

    const movie = document.createElement('li')

    const movieTitle = document.createElement('span')
    movieTitle.textContent = inputField.value
    movieTitle.addEventListener('click', crossOffMovie)

    movie.appendChild(movieTitle)

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)

    document.querySelector('ul').appendChild(movie)

    inputField.value = ''
}
const button = document.querySelector('form')
button.addEventListener('submit', addMovie)

const deleteMovie = evt =>{
    evt.target.parentNode.remove()
    message.textContent = 'Movie removed'
}

const crossOffMovie = evt =>{
    evt.target.classList.toggle('checked')
    if (evt.target.classList.contains('checked') === true) {
        message.textContent = 'Movie seen!'
    } else {
        message.textContent = 'Movie unseen!'
}
}
