
let age = prompt('How old are you?');

if ( ( (age >= 1) && (age <=200) ) && (typeof(age)!==null) && (typeof(age)!==symbol) ) {
    alert('Your age '+age);
} else {
    let age = prompt('How old are you?');
}