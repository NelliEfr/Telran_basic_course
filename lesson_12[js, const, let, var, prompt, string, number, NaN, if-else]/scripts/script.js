// console.log("Hello world!")
// const let var

// const text = "Hello from variable text!"
// let text = "Hello from variable text!"
// console.log(text)
// A-Z a-z 0-9 $ _
// text1
// text_1
// $text
// Text
// 9text нельзя
// car name
// car_name = snake case
// carName = camel case
// car-name = kebab case, error

// console.log("========== prompt ==========")

// const name = prompt("Введите ваше имя!")
// Привет, name
// const hello = "Привет, " + name // concatenation
// const hello = `Привет, ${name}` // interpolation
// console.log(hello)

// const num1 = 10
// const num2 = 10.62
// const text = "hello"
// console.log(num1, num2)

// console.log(typeof(num))
// console.log(typeof num2)
// console.log(typeof text)

// console.log("========== Concatenation, interpolation ==========")

// Есть переменные r, g, b с числовыми значениями. 
// Вывести в консоль строку "rgb(12, 34, 14)" используя конкатенацию и интерполяцию.

// const r = 12
// const g = 34
// const b = 14
// "rgb(12, 34, 14)"
// console.log('"rgb(' + r + ", " + g + ", " + b + ')"') // concatenation
// console.log(`"rgb(${r}, ${g}, ${b})"`)// interpolation

// const a = 12
// const b = 4

// console.log("========== Math ==========")

// console.log(a + b)  // сложение
// console.log(a - b)  // вычитание
// console.log(a * b)  // умножение
// console.log(a / b)  // деление
// console.log(a % b)  // остаток от деления
// console.log(a ** b) // возведение в степень

// console.log("========== string, number ==========")

// let num = 10
// let strNum = "50"
// console.log(num)
// console.log(strNum)
// console.log(`type of num = ${typeof num}`)
// console.log(`type of strNum = ${typeof strNum}`)
// num = String(num)
// console.log(num)
// strNum = Number(strNum)
// strNum = +strNum
// console.log(strNum)
// console.log(`type of num after convert = ${typeof num}`)
// console.log(`type of strNum after convert = ${typeof strNum}`)

// console.log("========== NaN ==========")

// let str1 = "test"
// console.log(+str1) // NaN => not a number
// console.log(typeof NaN) // number

// console.log("========== Неявное преобразования типов данных ==========")

// console.log(2 + "2") // "2" + "2" = "22"
// console.log(4 - "2") // 4 - 2 = 2
// console.log(4 - "a") // NaN

// console.log("====================")

// Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит, сколько ему лет.
// const userAge = prompt("Напишите ваш возраст в годах")
// console.log(`Ваш возраст ${userAge}`)

// console.log("====================")

// Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат
// const userNum = prompt("Введите число")
// console.log(`Число в квадрате ${userNum ** 2}`)

// console.log("====================")

// Написать программу, которая считывает два числа (объявляем две переменные и записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забыть преобразовать полученные значения в число.
// const a = prompt("Введите 1 число")
// const b = prompt("Введите 2 число")
// console.log(`a + b = ${+a + +b}`)

// console.log("========== if else ==========")
// && и
// || или

// <=
// >=
// !=
// ==
// ===
// if (6 % 2 === 0 || 4 / 2 === 2) {
//     console.log('is even')
// } else {
//     console.log('is odd')
// }