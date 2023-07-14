const sidebar = document.querySelector('.navbar');
const menu = document.querySelector('.menu')

document.querySelector('#bars').onclick = () => {
    sidebar.classList.toggle('active');
};

document.querySelector('#xmark').onclick = () => {
    sidebar.classList.toggle('active');
};

document.querySelector('#menu').onclick = () => {
    menu.classList.toggle('muncul')
}