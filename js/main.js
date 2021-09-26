var tooltip = document.querySelector('.tooltip-item')

var tooltipOverlay = document.querySelector('.tooltip-item-overlay')

document.querySelectorAll('.tooltip').forEach((el) => {
        el.addEventListener('click', (e) => {
            let path = e.currentTarget.getAttribute('data-path')

            tooltip.classList.add('animate__animated', 'animate__fadeIn')
            if (document.querySelector(`[data-target=${path}]`)?.classList !== undefined){
                document.querySelector(`[data-target=${path}]`).classList.add('tooltip-active')
            }

        })
        tooltipOverlay.addEventListener('click', (e) => {
            document.querySelector('.tooltip-item').classList.remove('tooltip-active')

            tooltip.classList.remove('animate__animated', 'animate__fadeIn')


        })

})

var buttons = document.querySelector('.header__buttons')

function checkScroll() {
  if (window.scrollY > 0) {
    buttons.classList.add('-active')
  } else {
    buttons.classList.remove('-active')
  }
}

window.addEventListener('scroll', checkScroll)
checkScroll()
