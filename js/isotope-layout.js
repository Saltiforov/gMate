// external js: isotope.pkgd.js

// init Isotope
const iso = new Isotope('.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
const elements = document.querySelectorAll('.element-item');
const renderList = (el, start, limit) => {
    elements.forEach((el, index) => {
        if (index < start + limit) {
            el.classList.remove('none')
            el.classList.add('flex')
        } else {
            el.classList.remove('flex')
            el.classList.add('none')
        }
        iso.layout()
    });
    // let buttonLink = document.querySelector('.more__offers-link')
    // buttonLink.innerHTML += `посмотреть ещё ${(Number(elements.length) - limit + start)} вакансий`
}
renderList(elements, 0, 5)

iso.layout()

// bind filter button click
const filtersElem = document.querySelector('.filters-button-group');
filtersElem.addEventListener('click', function (event) {
    event.preventDefault()
// using a selector string

    if (!matchesSelector(event.target, 'button')) {
        return;
    }
    let filterValue = event.target.getAttribute('data-filter');
    const iso = Isotope.data('.grid')

    if (filterValue === '*') {
        renderList(elements, 0, 5)
        iso.layout()
    } else {
        elements.forEach((el, index) => {
            el.classList.remove('flex')
            el.classList.remove('none')
            iso.layout()
        });

    }
    iso.arrange({filter: filterValue});
});

// change is-checked class on buttons
const buttonGroups = document.querySelectorAll('.button-group');
const list = document.querySelectorAll('.category__list-item')

buttonGroups.forEach((el) => {
    let pathList = []
    list.forEach(btn => {
        pathList.push(btn.getAttribute('data-filter'))
    })
    el.addEventListener('click', (event) => {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
            return;
        }
        let path = event.target.getAttribute('data-filter')

        pathList.forEach(item => {
            console.log('item !== path', item !== path)

            if (item !== path){
                let localArr = document.querySelectorAll(`[data-filter='${item}']`)
                localArr.forEach(el => {
                    el.classList.remove('is-checked')
                })

            } else {
                let localArr = document.querySelectorAll(`[data-filter='${item}']`)
                localArr.forEach(el => {
                    event.target.classList.add('is-checked');
                    el.classList.add('is-checked')
                })
            }
        })
    })
})
