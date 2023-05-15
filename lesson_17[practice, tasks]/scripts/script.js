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

// Напишите функцию, которая в качестве аргументов получает слово и определяет, является ли оно палиндромом. Если да, функция возвращает true, в ином случае false.
// function isPalindrome(str) {
//     str = str.toLowerCase()
//     let reversed = ''
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i]
//     }
//     return reversed === str
// }
// console.log(isPalindrome('hello'))
// console.log(isPalindrome('anna'))
// console.log(isPalindrome('Anna'))

// Используя цикл, выведите в консоль сумму чисел из диапазона значений от 0 до 50 кратные 5.
// function getSum() {
//     let sum = 0
//     // 1
//     // for (let i = 0; i <= 50; i++) {
//     //     if (i % 5 === 0) {
//     //         sum += i
//     //     }
//     // }
//     // 2
//     // 0 5 10 15 20 25 30 ...
//     for (let i = 0; i <= 50; i += 5) {
//        sum += i 
//     }
//     return sum
// }
// console.log(getSum());

// В программе объявлена переменная list, содержащая массив данных. Используя цикл, посчитайте сумму значений до первого булевого значения. Дойдя до булевого значения остановите цикл. Результат суммы выведите в консоль.
// function sumOfArray() {
//     const list = [1, 3, 8, true, 6, false, 69, 62, true]
//     let sum = 0
//     for (let i = 0; i < list.length; i++) {
//         // 1
//         // if(typeof list[i] !== 'boolean') { // 1[number] 3[number] 8[number] true[boolean]
//         //     sum += list[i]
//         // } else {
//         //     return sum
//         // }

//         // 2
//         if(typeof list[i] === 'boolean') {
//             return sum
//         }
//         sum += list[i]
//     }
// }
// console.log(sumOfArray())

// В следующих задачах будет использоваться массив из объектов, каждый из которых описывает определенный товар:
// const products = [
//     {
//         id: 1,
//         title: "Lenovo",
//         price: 3000,
//         type: "Laptop",
//         discount: 25
//     },
//     {
//         id: 2,
//         title: "Blender",
//         price: 1500,
//         type: "Electronics",
//         discount: 13
//     },
//     {
//         id: 3,
//         title: "Bicycle",
//         price: 2000,
//         type: "Sport",
//         discount: 17
//     },
//     {
//         id: 4,
//         title: "Qwerty",
//         price: 100,
//         type: "Notebook",
//         discount: 8
//     },
//     {
//         id: 5,
//         title: "Nvidia",
//         price: 20000,
//         type: "Electronics",
//         discount: 10
//     }
// ]
// Написать цикл, который выводит только названия товаров
// for (let i = 0; i < products.length; i++) {
//     console.log(`Product title: ${products[i].title}`)
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена>)”
// for (let i = 0; i < products.length; i++) {
//     const {title, price} = products[i]
//     console.log(`${title} (${price})`)
// }

// Написать цикл, который выводит для каждого товара строку по маске “<название> (<цена со скидкой>)”
// for (let i = 0; i < products.length; i++) {
//     const {title, price, discount} = products[i]
//     console.log(`${title} (${price - price * discount / 100})`)
// }

// Написать функцию, которая получает в качестве аргумента массив из объектов и возвращает объект с самым дорогим товаром (без учета скидки).
// function getExpensive(products) {
//     let expensiveProduct = products[0]
//     for (let i = 0; i < products.length; i++) {
//         if(expensiveProduct.price < products[i].price) {
//             expensiveProduct = products[i]
//         }
//     }
//     return expensiveProduct
// }
// console.log(getExpensive(products))
