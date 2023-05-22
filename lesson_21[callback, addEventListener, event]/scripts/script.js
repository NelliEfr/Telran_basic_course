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
//     console.log(event)
    // counter++
    // pElem.innerText = counter
// })

// Написать программу, которая создает две кнопки и вешает на них событие нажатия. При нажатии на плюс в консоль выводится число, увеличивающееся на 1, а при нажатии на минус - уменьшившееся на 1.

// const btnPlus = document.createElement("button")
// const btnMinus = document.createElement("button")
// btnPlus.innerText = "Plus"
// btnMinus.innerText = "Minus"
// let counter = 0
// btnPlus.addEventListener("click", function () {
//     counter++
//     console.log(counter)
// })
// btnMinus.addEventListener("click", function () {
//     counter--
//     console.log(counter) 
// })
// document.body.append(btnPlus, btnMinus)

// Повесить обработчик на нажатие клавиш клавиатуры и при вводе букв их вывести в параграф. Для решения этой задачи понадобится использование объекта event.
// const pText = document.querySelector(".text")
// document.addEventListener("keydown", function(event) {
//     pText.innerText += event.key
// })

// Написать программу, которая формирует на основе массива строк множество параграфов и выводит их в интерфейс. При клике на параграф текст должен меняться на звездочки "*****".
// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
// for (let i = 0; i < words.length; i++) {
//     const pWord = document.createElement("p")
//     pWord.innerText = words[i]
//     document.body.append(pWord)
//     pWord.addEventListener("click", function () {
//         pWord.innerText = "*****"
//     })
// }

// В js объявлен массив с ссылками на картинки. На основе этого массива формируется множество маленьких картинок в верхней части интерфейса. При нажатии на одну из картинок забирается ссылка на эту картинку и в нижней части интерфейса отображается в большем размере. Так, пользователь нажимая на маленькие картинки видит их отображение в большем размере.
// const images = ["https://upload.wikimedia.org/wikipedia/commons/8/80/140-P1020281_-_Flickr_-_Laurie_Nature_Bee.jpg", "https://avatars.mds.yandex.net/i?id=ac8f98ab623e6ac9f960456bcfdb7999dd326e2a-9181363-images-thumbs&n=13",
// "https://pibig.info/uploads/posts/2021-06/1623328147_47-pibig_info-p-priroda-mira-priroda-krasivo-foto-51.jpg", "https://where.ru/upload/iblock/ad4/ad4ef7e48f611b6be29e51e9aefaecd1.jpg"]
// const divThumbnails = document.querySelector("#thumbnails")
// const imgPreview = document.querySelector("#preview img")
// for (let i = 0; i < images.length; i++) {
//     const imgElem = document.createElement("img")
//     imgElem.setAttribute("src", images[i])
//     imgElem.setAttribute("alt", "image")
//     divThumbnails.append(imgElem)
//     imgElem.addEventListener("click", function() {
//         imgPreview.setAttribute("src", images[i])
//         imgPreview.setAttribute("alt", "image")
//     })
// }