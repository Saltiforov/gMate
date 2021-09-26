document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll('.element-item')
    const profile = document.querySelectorAll('.profile-btn')
    const modals = document.querySelectorAll('.modal:not(.no-js)')
    const modalOverlay = document.querySelectorAll('.modal:not(.no-js) .modal-overlay')
    const closeBtn = document.querySelectorAll('.btn-close')
    const confirmBtn = document.querySelector('.profile-confirm')

    cards.forEach((el) => {
        el.addEventListener('click', (e) => {
            document.body.classList.remove('initial');
            document.body.classList.add('hidden');

            let path = e.currentTarget.getAttribute('data-path')
            document.querySelector(`[data-target=${path}]`).classList.add('open')
        })

    })
    profile.forEach(el => {
        el.addEventListener('click', (e) => {
            document.body.classList.remove('initial');
            document.body.classList.add('hidden');

            let path = e.currentTarget.getAttribute('data-path')
            document.querySelector(`[data-target=${path}]`).classList.add('open')
        })
    })

    confirmBtn.addEventListener('click', (e) => {
        document.body.classList.remove('hidden');

        document.body.classList.add('initial');
        modals.forEach((el) => {
                el.classList.remove('open')
            })
    })

    modalOverlay.forEach((el,index) => {
        el.addEventListener('click', (e) => {
            document.body.classList.remove('hidden');

            document.body.classList.add('initial');
            if (e.target == modalOverlay[index]) {
                modals.forEach((el) => {
                    el.classList.remove('open')
                })
            }
        })
    })

    closeBtn.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            if (e.target == closeBtn[index]) {
                modals.forEach((el) => {
                    el.classList.remove('open')
                })
            }
        })
    })

});


