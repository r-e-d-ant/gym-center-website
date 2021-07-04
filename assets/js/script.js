
const navbar = document.querySelector('.navbar');
const openMenuIcon = document.querySelector('.bx-menu');
const closeMenuIcon = document.querySelector('.bx-x');
const gymName = document.querySelector('.gym__name_container');


// -- OPEN MENU --

openMenuIcon.addEventListener('click', () => {
    if(navbar.classList.contains('show_d_flex')){
        navbar.classList.remove('show_d_flex');
        openMenuIcon.classList.remove('hide');
        gymName.classList.remove('show_d_block');
    }else {
        navbar.classList.add('show_d_flex');
        openMenuIcon.classList.add('hide');
        gymName.classList.add('show_d_block');
    }
})

// -- CLOSE MENU --

closeMenuIcon.addEventListener('click', () => {
    if(navbar.classList.contains('show_d_flex')){
        navbar.classList.remove('show_d_flex');
        openMenuIcon.classList.remove('hide');
        gymName.classList.remove('show_d_block');
    }
})