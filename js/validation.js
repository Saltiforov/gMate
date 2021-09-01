import emails from "./free.js";

const form = document.querySelector('.employer__form')
const email = document.querySelector('.form__email')
const phone = document.querySelector('.form__number')
const name = document.querySelector('.form__name')
const errorMessage = document.querySelector('.employer__form')
const fields = document.querySelectorAll('.form__input')

name.addEventListener('input', (e) => {
    if (!e.currentTarget.value) {
        console.log('not valid')

    } else {
        console.log('valid')
    }
})

email.addEventListener('input', (e) => {
    let domain = e.currentTarget.value.slice((e.currentTarget.value.indexOf("@") + 1), e.currentTarget.value.length)
    if (emails.includes(String(domain).toLowerCase())) {
        errorMessage.classList.add('show-error')
    } else {

        errorMessage.classList.remove('show-error')
    }

})


phone.addEventListener('input', (e) => {
    if (!e.currentTarget.value) {
        console.log('not valid')
    } else {
        console.log('valid')
    }

})
form.addEventListener('input', (e) => {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value) {
            document.querySelector('.form__btn').classList.remove('disabled')
        }
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log('submit',)
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            document.querySelector('.form__btn').classList.add('disabled')
        }
    }
})

