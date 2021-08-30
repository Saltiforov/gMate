document.querySelectorAll('.tabs-triggers__item').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').replace('#', '')

        if (item.classList.contains('tabs-triggers__item--active')) {
            document.querySelectorAll('.tabs-triggers__item').forEach(() => e.currentTarget.classList.remove('tabs-triggers__item--active'))
            document.getElementById(id).classList.remove('animate__animated', 'animate__fadeInLeft')
            document.getElementById(id).classList.remove('tabs-content__item--active')
            // document.getElementById(id).classList.add('tabs-content__item--hide')
        } else {
            // document.getElementById(id).classList.remove('tabs-content__item--hide')
            document.getElementById(id).classList.add('animate__animated', 'animate__fadeInLeft')
            item.classList.add('tabs-triggers__item--active')
            document.getElementById(id).classList.add('tabs-content__item--active')
        }
    })
})
