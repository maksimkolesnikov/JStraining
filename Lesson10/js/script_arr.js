console.warn('Task 1');
const arr = [2, 20, 30, 24, 1, 43, 8, 21, 44, 88, 25, 13]
console.info('for');
for (i = 0; i < arr.length-1; i++) {//element?
    if (arr[i]>25) {
        console.log(arr[i]);
    };
}
console.info('forEach');
arr.forEach(function(item,i,arr) {//конструкция function(item,i,arr) стандартная?
    if (arr[i]>25) {
        console.log(arr[i]);
    };
});
console.info('map');
arr.map(function(item,i,arr) {//конструкция function(item,i,arr) стандартная?
    if (arr[i]>25) {
        console.log(arr[i]);
    }
});

console.warn('Task 2');
console.info('for');
let arrfor = [];
for (i = 0; i < arr.length-1; i++) {
    if (arr[i]>25) {
        arrfor.push(arr[i]);
    }
}
console.log(arrfor);

console.info('forEach');
let arrforEach = [];
arr.forEach(function(item,i,arr) {
    if(arr[i] > 25) {
        arrforEach.push(arr[i]);
    }
});
console.log(arrforEach);

console.info('map');
let arrmap = [];
arr.map(function(item,i,arr) {
    if (arr[i]>25) {
        arrmap.push(arr[i]);
    }
});
console.log(arrmap);