console.log('Client side javascript file app.js loaded')


const weatherForm = document.querySelector('#search')
const search = document.querySelector('#searchText')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    fetch('/weather?address=' + encodeURIComponent(search.value)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast

            }
        })
    })
})