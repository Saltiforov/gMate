const arrowBtns = document.querySelectorAll('.tabs-triggers__item')

document.querySelectorAll('.tabs-triggers__item').forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').replace('#', '')

        if (item.classList.contains('tabs-triggers__item--active')) {

            arrowBtns.forEach((btn) => {
                if (btn.getAttribute('href').replace('#', '')
                    ===
                    item.getAttribute('href').replace('#', '')) {
                    console.log('ITEM', item)
                    item.classList.remove('tabs-triggers__item--active')
                    btn.classList.remove('tabs-triggers__item--active')
                }
            })
            document.getElementById(id).classList.remove('animate__animated', 'animate__fadeInLeft')

            document.getElementById(id).classList.remove('tabs-content__item--active')


        } else {

            document.getElementById(id).classList.add('animate__animated', 'animate__fadeInLeft')

            arrowBtns.forEach((btn) => {
                if (btn.getAttribute('href').replace('#', '')
                    ===
                    e.currentTarget.getAttribute('href').replace('#', '')) {
                    btn.classList.add('tabs-triggers__item--active')
                }
            })

            document.getElementById(id).classList.add('tabs-content__item--active')
        }
    })
})
