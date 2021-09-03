const tooltip = document.querySelector('.tooltip-item')

const tooltipOverlay = document.querySelector('.tooltip-item-overlay')

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
