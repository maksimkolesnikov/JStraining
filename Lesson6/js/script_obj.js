const arr = [
    {
        price:10,
        color:"black",
    },
    {
        price:20,
        color:"blue",
    },
    {
        price:30,
        color:"green",
    },
    {
        price:40,
        color:"orange",
    },
    {
        price:50,
        color:"red",
    },
]

for (let i = 0; i < arr.length; i++) {
    var div = document.createElement('div');
    div.className = "block";
    div.innerHTML = "Price:" + arr[i].price + "</br>" + arr[i].color;
    container.appendChild(div);
}

