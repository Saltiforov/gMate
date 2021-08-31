// external js: isotope.pkgd.js

// init Isotope
const iso = new Isotope('.grid', {
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
const elements = document.querySelectorAll('.element-item');
const renderList = (el,start,limit) => {
    elements.forEach((el, index) => {
        if (index < start + limit){
            el.classList.remove('none')
            el.classList.add('flex')
        }else {
            el.classList.remove('flex')
            el.classList.add('none')
        }
        iso.layout()
    });
    // let buttonLink = document.querySelector('.more__offers-link')
    // buttonLink.innerHTML += `посмотреть ещё ${(Number(elements.length) - limit + start)} вакансий`
}
renderList(elements,0,5)

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
            renderList(elements,0,5)
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
for (let i = 0, len = buttonGroups.length; i < len; i++) {
    let buttonGroup = buttonGroups[i];
    radioButtonGroup(buttonGroup);
}

function radioButtonGroup(buttonGroup) {
    buttonGroup.addEventListener('click', function (event) {
        // only work with buttons
        if (!matchesSelector(event.target, 'button')) {
            return;
        }
        buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
        event.target.classList.add('is-checked');
    });
}
