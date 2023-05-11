// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 
// function createArr(a, b) {
//     let min = 0
//     let max = 0
//     if(a < b) {
//         min = a
//         max = b
//     } else {
//         min = b
//         max = a
//     }

//     const arr = []
//     for (let i = min; i <= max; i++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(createArr(23, 9))
// console.log(createArr(-15, 12))

// Напишите функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от большего числа к меньшему.
// function createArr(a, b) {
//     let min = 0
//     let max = 0
//     if(a < b) {
//         min = a
//         max = b
//     } else {
//         min = b
//         max = a
//     }

//     const arr = []
//     for (let i = max; i >= min; i--) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(createArr(23, 9))
// console.log(createArr(-15, 12))

// ================================
// const list = [1, 3, 8, -5, 6, -10, 69, 62, -15]
// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте сумму чисел и выведите в консоль.
// let sum = 0
// for (let i = 0; i < list.length; i++) {
//     sum += list[i]
//     // sum = sum + list[i]
// }
// console.log(sum)

// В программе объявлена переменная list, представляющая массив положительных и отрицательных численных значений. Используя цикл, выведите в консоль сумму положительных чисел.
// let sum = 0
// for (let i = 0; i < list.length; i++) {
//     if (list[i] > 0) {
//         sum += list[i]
//     }
// }
// console.log(sum)

// В программе объявлена переменная list, которая содержит массив чисел. Используя цикл посчитайте разность суммы всех четных чисел и суммы всех нечетных.
// let sumOdds = 0
// let sumEvens = 0
// for (let i = 0; i < list.length; i++) {
//     if (list[i] % 2 === 0) {
//         sumEvens += list[i]
//     } else {
//         sumOdds += list[i]
//     }
// }s
// console.log(sumEvens - sumOdd)

// Напишите функцию, которая в качестве аргумента получает массив из чисел и возвращает объект со свойствами min, max, avg с соответствующими значениями по массиву.
// function getArrStats(arr) {
//     let min = arr[0] // 1
//     let max = arr[0] // 1
//     let sum = 0
//     // [1, 3, 8, -5, 6, -10, 69, 62, -15]
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) { // 1 > -5; -5 > -10; -10 > -15
//             min = arr[i] // min = -5; min = -10; min = -15
//         }
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//         sum += arr[i]
//     }
//     let avg = sum / arr.length
    
//     return { min, max, avg }
//     // {
//     //     min: min,
//     //     max: max,
//     //     avg: avg
//     // }
// }
// console.log(getArrStats(list))

// В программе объявлена переменная word со строковым значением. Используя цикл, разверните слово.
// создать функцию reverse которая получает строку в аргументы, используя цикл, разворачивает слово и возвращает.
// function reverse(str) {
//     // let reversed = ''
//     // for (let i = str.length - 1; i >= 0; i--) {
//     //     reversed += str[i]// '' + d; 'd' + 'r'; 'dr' + o; 'dro' + w; drow
//     // }
//     // return reversed
//     return str.split("").reverse().join("")
// }
// console.log(reverse("word"))
// console.log(reverse("hello"))