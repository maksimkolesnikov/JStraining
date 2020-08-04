const array = ["Арбуз", "Апельсин", "Виноград", "Хурма", "Ежевика"];
console.log(array);
let text = document.getElementById('text');

function find() {
    if (array.indexOf(text.value)-1) {
        alert('Find');
        array.splice(array.indexOf(text.value),1);
        console.log(array);
    }else{
        alert('not find');
    }
}