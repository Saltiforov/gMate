// const $ = {}
// window.$ = $
//
// function _createModal(options) {
//     const modal = document.createElement('div')
//     modal.classList.add('modal')
//     modal.insertAdjacentHTML('afterbegin', `
//       <div class="modal-overlay">
//         <div class="modal-dialog">
//           <div class="modal-content">
//             <div class="modal-header">
//               <div class="modal-title">
//                 <img src="images/avito.png" alt="company-logo">
//               </div>
//               <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">&times;</button>
//             </div>
//
//             <div class="modal-body">
//               <p>Modal body text goes here.</p>
//             </div>
//
//             <div class="modal-footer">
//               <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//               <button type="button" class="btn btn-primary">Save changes</button>
//             </div>
//           </div>
//         </div>
//     </div>
//     `)
//     document.body.appendChild(modal)
//     return modal
// }
//
// document.querySelector()
//
// function modal(options) {
//     const $modal = _createModal(options)
//     return {
//         open() {
//             $modal.classList.add('open')
//         },
//         close() {
//             $modal.classList.remove('open')
//         },
//         destroy() {
//         },
//     }
// }

document.addEventListener("DOMContentLoaded", function () {

    const cards = document.querySelectorAll('.element-item')
    const profile = document.querySelector('.profile-btn')
    const modals = document.querySelectorAll('.modal')
    const modalOverlay = document.querySelectorAll('.modal-overlay')
    const closeBtn = document.querySelectorAll('.btn-close')
    const confirmBtn = document.querySelector('.profile-confirm')

    cards.forEach((el) => {
        el.addEventListener('click', (e) => {
            document.body.style.overflow = 'hidden'

            let path = e.currentTarget.getAttribute('data-path')
            document.querySelector(`[data-target=${path}]`).classList.add('open')
        })

    })

    profile.addEventListener('click', (e) => {
        document.body.style.overflow = 'hidden'
        let path = e.currentTarget.getAttribute('data-path')
        document.querySelector(`[data-target=${path}]`).classList.add('open')
    })

    confirmBtn.addEventListener('click', (e) => {
        document.body.style.overflow = 'initial'
            modals.forEach((el) => {
                el.classList.remove('open')
            })
    })

    modalOverlay.forEach((el,index) => {
        el.addEventListener('click', (e) => {
            document.body.style.overflow = 'initial'
            if (e.target == modalOverlay[index]) {
                modals.forEach((el) => {
                    el.classList.remove('open')
                })
            }
        })
    })

    closeBtn.forEach((el, index) => {
        el.addEventListener('click', (e) => {
            document.body.style.overflow = 'initial'
            if (e.target == closeBtn[index]) {
                modals.forEach((el) => {
                    el.classList.remove('open')
                })
            }
        })
    })

});


