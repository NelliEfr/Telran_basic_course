// console.log("Hello, John!");
// console.log("Hello, Mary!");
// console.log("Hello, Jack!");

// ============== functions ==============

// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }
// greet("John")
// greet("Mary")
// greet("Jack")

// function sum(a, b) {
//     return a + b 
// }
// const sumResult = sum(7, 8)
// console.log(sumResult)
// console.log(sum(9, 3))

// Разобрать простой пример функции, которая считывает значение числа через prompt и выводит квадрат этого числа в консоль. 
// function printPow() {
//     const num = +prompt("Введите число")
//     console.log(num**2)
// }
// printPow()

// Объявить функцию, которая считывает значение через prompt и выводит “ДА” если число четное и “НЕТ” в ином случае.
// function oddOrEven() {
//     const num = +prompt("Введите число")
//     if (num % 2 === 0) {
//         console.log("ДА");
//     } else {
//         console.log("НЕТ");
//     }
// }
// oddOrEven()

// Рассмотреть пример функции power, которая получает два аргумента (первый это основание степени, а второй сама степень) и выводит в консоль результат вычислений. 
// function power(a, b = 2) {
//     console.log(a**b)
// }
// power(3, 2)
// power(4, 4)
// power(5, 3)
// power(9)

// Создать функцию, которая в качестве аргументов получает два числа и выводит в консоль наибольшее.
// function printMax(a, b) {
//     if ( a > b) {
//         console.log(a);
//     } else if (a === b) {
//         console.log("числа равны");
//     } else {
//         console.log(b);
//     }
// }
// printMax(4, 9)
// printMax(9, 4)
// printMax(10, 26)
// printMax(50, 50)

// Переписать функцию power таким образом, чтобы она возвращала результат вычислений
// function power(a, b = 2) {
//     return a**b
// }
// const result = power(3)
// console.log(`result = ${result}`);
// console.log(power(4, 4))
// console.log(power(5, 3))
// console.log(power(9))

// Описать процесс, используя функцию power, который находит гипотенузу по длине двух катетов с размерами 3 и 4 (теорема Пифагора).
// a**2 + b**2 = c**2
// 1.
// const a = power(3)
// const b = power(4)
// let c = a + b
// c = power(c, 0.5)
// console.log(c)
// 2.
// console.log(power(power(3) + power(4), 0.5))

// Описать функцию, которая получает число и возвращает true, если число четное и false в ином случае.
// function oddOrEven(a) {
//     // 1.
//     // if (a % 2 === 0) {
//     //     return true
//     // } else {
//     //     return false
//     // }
//     // 2.
//     return a % 2 === 0
// }
// console.log(oddOrEven(3));
// console.log(oddOrEven(8));

// Описать функцию, которая получает в качестве аргумента число и возвращает массив из чисел от 0 до указанного числа.
// function createArr(a) {
//     const arr = []
//     for (let i = 0; i <= a; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(createArr(15));
// console.log(createArr(10));
// console.log(createArr(5));

// ============== function expression/declaration ==============
// ======== function declaration ========
// power(2, 3)
// function power(a, b = 2) {
//     console.log(a**b)
// }

// ======== function expression ========
// power1(4, 3) // error
// const power1 = function(a, b = 2) {
//     console.log(a**b)
// }
// power1(4, 3)

// const user = {
//     firstname: 'John',
//     lastName: 'Dow',
//     greet: function(name) {
//         console.log(`Hello, ${name}!`)
//     },
//     print: console.log
// }
// user.greet("John")
// user.print("Hello world")
// const echo = console.log
// echo(user)

// ======== var, hoisting ========

// let greet = "Hello world"
// function hi() {
//     let hey = "Hello"
//     console.log(hey)
//     console.log(greet)
// }
// hi()
// console.log(hey) // error

// if (true) {
//     var hello = "hello"
//     let hello1 = "hello1"
// }
// console.log(hello) // "hello"
// console.log(hello1) // error

// hoisting
// function hi() {
//     // var hey = undefined
//     console.log(hey) // undefined
//     var hey = "Hello"
//     console.log(hey) // "Hello"
// }
// hi()

// var num = 0
// var num = 1
// var num = 2
// var num = 3
// console.log(num) // 3
