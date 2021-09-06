import emails from "./free.js";
import validationPhone from "./utils.js"
const form = document.querySelector('.employer__form')
const email = document.querySelector('.form__email')
const phone = document.querySelector('.form__number')
const name = document.querySelector('.form__name')
const errorMessage = document.querySelector('.employer__form')
const checkbox = document.querySelector('.form__checkbox')
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
    if (phone.value.length === 0) {
        Inputmask.remove(phone)
    }
    let str = phone.value.substr(0,1)
    if (str == 8 || phone.value[1] == 8){
        phone.value = 7
    }
        let mask = validationPhone(phone.value).replace(/\s+/g, '-')
        let im = new Inputmask(mask.replace(/0/g,'9'))

        im.mask(phone)

})

form.addEventListener('input', (e) => {
        if (name.value && checkbox.checked && phone.value && email.value) {
            document.querySelector('.form__btn').classList.remove('disabled')
        } else {
            document.querySelector('.form__btn').classList.add('disabled')
        }
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let domain = email.value.slice((email.value.indexOf("@") + 1), email.value.length)

    if (!emails.includes(String(domain).toLowerCase()) && !(email.value.indexOf("@") + 1)) {
        errorMessage.classList.add('show-error')
    } else {
        errorMessage.classList.remove('show-error')
    }
    for (let i = 0; i < fields.length; i++) {
        if (!fields[i].value && checkbox.checked) {
            document.querySelector('.form__btn').classList.add('disabled')
        }
    }
})

