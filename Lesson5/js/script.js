const buttongrid = document.querySelector('#grid');
const buttonlist = document.getElementById('list');

const pen = document.querySelector('.pen');
const img = document.querySelector('img');

buttonlist.addEventListener('click', function() {
    pen.setAttribute('class', 'lpen');
    img.setAttribute('src', '');
});
