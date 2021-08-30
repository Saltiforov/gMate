const email = document.querySelector('.form__email')
const errorMessage = document.querySelector('.employer__form')
email.addEventListener('input', (e) => {
    let enableValues = ['gmail','yandex','mail']

    let emailValue =e.currentTarget.value

    const regex = /@/;
    console.log(regex.test(emailValue))
    if (regex.test(emailValue)){

        let domain = emailValue.slice((emailValue.indexOf("@") + 1), emailValue.length)
        console.log('domain', domain)
       let error = enableValues.find((el) => {
            return el == domain
        })
        error ? errorMessage.classList.add('show-error') : errorMessage.classList.remove('show-error')
    }

})
