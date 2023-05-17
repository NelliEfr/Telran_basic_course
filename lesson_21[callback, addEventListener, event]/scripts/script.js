// function printHi(username) {
//     console.log(`Hi ${username}`)
// }
// function printBy(username) {
//     console.log(`By ${username}`)
// }
// function printHow(username) {
//     console.log(`How are you, ${username}`)
// }
// function getNameOfUser(username, callback) {
//     callback(username)
//     // printHi(username) => printHi("John")
//     // printBy(username) => printBy("John")
//     // printHow(username) => printHow("John")
// }
// getNameOfUser("John", printHi)
// getNameOfUser("John", printBy)
// getNameOfUser("John", printHow)

// Написать функцию forEach, которая принимает в качестве первого аргумента массив, а в качестве второго функцию и вызывает принятую функцию для каждого элемента массива.
// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i])
//     }
// }
// function pow(num) {
//     console.log(num ** 2)
// }
// function divide(num) {
//     console.log(num / 2)
// }
// const nums = [2, 6, -4, 8, -5, 25, 2]
// forEach(nums, pow)
// forEach(nums, divide)

// Повесить событие клика на кнопку таким образом, чтобы при нажатии на нее в консоль выводилась строка. Жмак.
// const btn = document.querySelector("button")
// 1
// function clickCallback() {
//     console.log("Жмак")
// }
// btn.addEventListener("click", clickCallback)
// 2
// btn.addEventListener("click", function() {
//     console.log("Clicked")
// })

// Переделать кнопку таким образом, чтобы при нажатии на нее в параграфе в интерфейсе значение увеличивалось на 1. В начале рассмотрите процесс, при котором мы каждый раз считываем число из параграфа, меняем и записываем обратно, а потом переделайте процесс так, чтобы значение хранилось в переменной, изменялось при клике и записывалось в параграф.
// const pElem = document.querySelector("p")
// 1
// btn.addEventListener("click", function () {
//     let counter = +pElem.innerText
//     counter++
//     pElem.innerText = counter
// })
// 2
// let counter = 0
// btn.addEventListener("click", function (event) {
    // console.log(event)
    // counter++
    // pElem.innerText = counter
// })
