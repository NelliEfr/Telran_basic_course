// const divElem = document.createElement('div') // <div></div>
// divElem.innerText = "Hello world!" // <div>Hello world!</div>
// const body = document.querySelector("body") // document.body
// ==== APPEND ====
// console.log(document.body.append(divElem)) // undefined
// const appendDiv = document.body.appendChild(divElem)
// console.log(appendDiv) // <div>Hello world!</div>
// ==== PREPEND ====
// document.body.prepend(divElem)

// Создать параграф, задать ему текст и добавить в HTML-документ в div с #root
// const pElem = document.createElement('p') // <p></p>
// pElem.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit." // <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
// // div
// // .root
// // #root
// const rootElem = document.querySelector("#root")
// rootElem.prepend(pElem)

// Создать множество параграфов с числами от 0 до 19. Добавить их в пустой массив и выводить в консоли.
// const pElems = []
// for (let i = 0; i <= 19; i++) {
//     const pElem = document.createElement("p") // <p></p>
//     pElem.innerText = i // <p>{i}</p>
//     console.log(pElem)
//     pElems.push(pElem)
// }
// console.log(pElems)

// Написать цикл, который проходится по массиву строк и для каждого создает параграф и добавляет в #root
// const words = ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipisicing', 'elit']
// const divRootElem = document.querySelector("#root")
// for (let i = 0; i < words.length; i++) {
//     const pElem = document.createElement("p") // <p></p>
//     pElem.innerText = words[i] // <p>{words[i]}</p>
//     divRootElem.append(pElem)
// }

// Написать программу, которая запрашивает у пользователя картинку и ссылку на статью (любую) и формирует в интерфейсе картинку и внизу ссылку, указанную пользователем.
// const imgLink = prompt("Введите ссылку на картинку")
// const postLink = prompt("Введите ссылку на пост")

// const imgElem = document.createElement("img") // <img>
// imgElem.setAttribute("src", imgLink) // <img src={imgLink}>
// imgElem.setAttribute("alt", "Post image") // <img src={imgLink} alt="Post image">

// const aElem = document.createElement("a") // <a></a>
// aElem.setAttribute("href", postLink) // <a href={postLink}></a>
// aElem.innerText = "Post link" // <a href={postLink}>Post link</a>
// const contElem = document.querySelector(".container")
// contElem.append(imgElem, aElem)