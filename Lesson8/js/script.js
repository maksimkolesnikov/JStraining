let goods = {
    'Майка': 100,
    'Шорты': 200,
    'Обувь': 300,
    'Кепка': 400,
}

function Sum(goods) {
    let result = 0;
    for(let item in goods) {
        result = result + goods[item];
    }
    console.log(result);
}

Sum(goods);