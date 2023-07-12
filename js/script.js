const sidebar = document.querySelector('.navbar');

document.querySelector('#bars').onclick = () => {
    sidebar.classList.toggle('active');
};

document.querySelector('#xmark').onclick = () => {
    sidebar.classList.toggle('active');
};