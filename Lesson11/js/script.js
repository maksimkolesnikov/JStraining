let radiogroup = [
document.getElementById('radiopoint1').checked, //не могу получить верное значение радиокнопки, получаю при value = on, при checked = false, в localstorage не записывается при изменениях
document.getElementById('radiopoint2').checked, 
document.getElementById('radiopoint3').checked, 
document.getElementById('radiopoint4').checked
];

console.log(document.getElementById('radiopoint1').checked);

function save() {
    localStorage.setItem('statuspointbut1', pointbut1.checked);
    localStorage.setItem('statuspointbut2', pointbut2.checked);
    localStorage.setItem('statuspointbut3', pointbut3.checked);
    localStorage.setItem('usertext', document.getElementById('usertext').value);
    localStorage.setItem('radiogroup', radiogroup);
}