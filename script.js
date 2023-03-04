//  Створи функцію, яка буде виводити кількість переданих їй аргументів.


function personalInfo() {
    console.log(arguments.length);
}

personalInfo('Nata', 42, 'Poltava');
personalInfo('Max', 18);

// 3 -  Напиши функцію, яка приймає 2 числа і повертає :
//      -1, якщо перше число менше, ніж друге;
//      1 - якщо перше число більше, ніж друге;
//      0 - якщо числа рівні.

function countNumbers() {
    const a = +prompt("Введіть перше число:");
    const b = +prompt("Введіть друге число:");

    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

console.log(countNumbers());

// 4 - Напиши функцію, яка обчислює факторіал переданого їй числа.


let n = prompt("Введіть число для обчислення факторіалу");

function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(n));


// 5 -   Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
//      Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function sumStrings() {
    let a = prompt("Введіть першу цифру");
    let b = prompt("Введіть другу цифру");
    let c = prompt("Введіть третю цифру");

    return parseInt(a + b + c);
}

console.log(sumStrings());

// 6 -  Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
//      Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.


function calcArea(length, width) {
    if (width === undefined) {
        return length ** 2;
    } else {
        return length * (width || length);
    }
}

let length = +prompt("Введіть довжину прямокутника або сторону, якщо це квадрат");
let width = +prompt("Введіть ширину прямокутника, якщо вона є (можна пропустити)");

console.log(calcArea(length, width));

//Варіанти які не працювали, не розумію чому
// function calcArea(length, width) {
//     if (width === undefined) {
//         width = length;
//     }
//     return length * width;
// }

// function calcArea(length, width) {
//     if (width === undefined) {
//         return length ** 2;
//     } else {
//         return length * width;
//     }
// }