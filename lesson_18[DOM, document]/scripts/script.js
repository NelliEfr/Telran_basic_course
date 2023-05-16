// const paragraph = document.querySelector("p")
// console.log(paragraph)
// console.log(paragraph.innerText)
// paragraph.innerText = "Hello"

// const paragraphClass = document.querySelector(".my-paragraph")
// console.log(paragraphClass)
// paragraphClass.innerText = "World"

// const paragraphs = document.querySelectorAll("p")
// for (let i = 0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i]);
// }

// Написать программу, которая находит параграфы по классу и заменяет в каждом из них текст на “привет”.
// const paragraphs = document.querySelectorAll(".my-paragraph")
// console.log(paragraphs);
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].innerText = "привет"
// }

// Найти элемент с классом main который находится внутри box и записать в него текст “Я главный элемент”.
// const mainElem = document.querySelector(".box .main")
// mainElem.innerText = "“Я главный элемент”"

// ======= setAttribute =======
// const aElem = document.querySelector(".test-link")
// console.log(aElem)
// aElem.setAttribute("data-text", "hello world")
// aElem.setAttribute("href", "https://google.com")

// ======= attributes =======
// const imgElem = document.querySelector(".test-img")
// console.log(`Src: ${imgElem.src}`)
// imgElem.src = "test link"
// imgElem.setAttribute("src", "test link")
// imgElem.id = "img-elem"
// console.log(`Alt: ${imgElem.alt}`)

// Написать скрипт, который находит картинки в диве с классом main и первым 5 картинкам меняет url на "https://i.icanvas.com/list-square/rocky-mountains-TFI1221.jpg".
// const imgElems = document.querySelectorAll("div.main img")
// console.log(imgElems);
// for (let i = 0; i < 5; i++) {
//     imgElems[i].setAttribute("src", "https://i.icanvas.com/list-square/rocky-mountains-TFI1221.jpg")
// }

// Написать скрипт, который находит все ссылки на странице и формирует массив со всеми адресами. В итоге этот массив необходимо вывести в консоль.
// const aElems = document.querySelectorAll("a")
// const links = []
// for (let i = 0; i < aElems.length; i++) {
//     links.push(aElems[i].href)
// }
// console.log(links);