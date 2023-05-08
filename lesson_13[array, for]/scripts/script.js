// const arr = [0, 3, 2, 6, 4]
// console.log(arr)
// console.log(arr[3]) // 6
// console.log(arr[50]) // undefined
// arr[1] = "hello"
// arr[2] = arr
// console.log(arr) // [0, "hello", 2, 6, 4]

// =========== pop, push, shift, unshift ===========

// const arr = [0, 3, 2, 6, 4]
// console.log(arr)
// arr.push(7, 10, 11, 52, 30) // add new elems from end
// console.log(arr) // [0, 3, 2, 6, 4, 7, 10, 11, 52, 30]
// const lastElem = arr.pop() // get last elem and remove it
// console.log(arr)
// console.log(lastElem)
// const firstElem = arr.shift() // get first elem and remove it
// console.log(arr)
// console.log(firstElem)
// arr.unshift(7, 10, 11, 52, 30) // add new elems from start
// console.log(arr)

// Написать программу, которая считывает три числа через prompt и добавляет их в  массив.
// const arr = [0, 3, 2, 6, 4]
// const num1 = +prompt("Введите первое число")
// const num2 = +prompt("Введите второе число")
// const num3 = +prompt("Введите третье число")
// arr.push(num1, num2, num3)
// console.log(arr)

//Написать программу, в которой объявлен массив с 5 числовыми элементами. Программа должна заполнить новый пустой массив квадратами чисел из первого массива.
// Пример: 
// Исходный массив [1, 4, 2, 5, 3]
// Итоговый массив [1, 16, 4, 25, 9]

// const arr = [1, 4, 2, 5, 3]
// const arr1 = []
// arr1.push(arr[0]**2, arr[1]**2, arr[2]**2, arr[3]**2, arr[4]**2)
// console.log(arr1)

// =========== for ===========

// Разобрать синтаксис цикла for на примере вpush
// i = i + 1 // 1
// i += 1 // 2
// i -= x, i += x, i *= x, i /= x
// i++
// i--
// for(let i = 0; i < 10; i++) {
//     console.log(i)
// }

// Разобрать пример вывода всех элементов массива при помощи цикла for.
// const arr = [1, 4, 2, 5, 3]

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// =========== tasks ===========
// const arr = [1, 4, -2, 5, 3, -5, 8, 16, 11, 23, -12, 4, -32]
// Написать цикл, который выводит только положительные числа из массива.
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) {
//         console.log(arr[i])
//     }
// }
// console.log("===========");
// Написать цикл, который выводит только четные числа.
// for(let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

// Разобрать синтаксис цикла с изменением i на два, три и так далее.
// for (let i = 0; i < 15; i += 2) {
//     console.log(i)
// }

// Разбор синтаксиса цикла от большего к меньшему
// for (let i = 15; i >= 0; i--) { // 15 14 13 12 11 10 ... 0 -1
//     console.log(i)
// }