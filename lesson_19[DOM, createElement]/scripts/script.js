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

// Массив из объектов со свойствами link и title. Свойства хранят в себе ссылку на страницу и название страницы соответственно. Напишите цикл, который создаст для каждого объекта ссылку и добавит в #root.
// <a href="{link}">{title}</a>
// const links = [
//     {
//         link: "https://google.com",
//         title: "Google"
//     },
//     {
//         link: "https://facebook.com",
//         title: "Facebook"
//     },
//     {
//         link: "https://github.com",
//         title: "GitHub"
//     },
//     {
//         link: "https://youtube.com",
//         title: "YouTube"
//     }
// ]
// const rootElem = document.querySelector("#root")
// for (let i = 0; i < links.length; i++) {
//     const aElem = document.createElement("a") // <a><a/>
//     const {link, title} = links[i]
//     aElem.innerText = title // <a>{title}<a/>
//     aElem.setAttribute("href", link) // <a href="{link}">{title}</a>
//     rootElem.append(aElem)
// }

// Рассматриваем кейс, в котором создается div с картинкой и ссылкой внутри.
// const imgLink = "https://www.china-roads.com/wp-content/uploads/2017/04/huangshan-7-1024x681-2-300x300.jpg"
// const link = "https://google.com"
/*
<div>
    <img src="{imgLink}" alt="Post image">
    <a href="{link}">Website</a>
</div>
*/
// const imgElem = document.createElement("img")
// imgElem.setAttribute("src", imgLink)
// imgElem.setAttribute("alt", "Post image")
// const aElem = document.createElement("a")
// aElem.setAttribute("href", link)
// aElem.innerText = "Website"
// const divElem = document.createElement("div")
// divElem.append(imgElem, aElem)
// console.log(divElem)
// document.body.append(divElem)

// Создаем функцию, которая получает ссылку на картинку и ссылку на сайт и возвращает элемент.
// function createDivWithImg(imgSrc, websiteLink) {
//     const imgElem = document.createElement("img")
//     imgElem.setAttribute("src", imgSrc)
//     imgElem.setAttribute("alt", "Post image")
//     const aElem = document.createElement("a")
//     aElem.setAttribute("href", websiteLink)
//     aElem.innerText = "Website"
//     const divElem = document.createElement("div")
//     divElem.append(imgElem, aElem)

//     return divElem
// }
// const newDivWithImg = createDivWithImg(imgLink, link)
// console.log(newDivWithImg)

// Создать множество карточек с товарами (на основе массива с объектами. У объекта свойства title, price, count)
// Написать скрипт, который выводит карточки с товарами в интерфейс (на основе массива с объектами. У объекта свойства title, price, count), а внизу выводится итоговая сумма товаров и их количество.
// const products = [
//     {
//         title: "Lenovo",
//         price: 3000,
//         count: 5
//     },
//     {
//         title: "Blender",
//         price: 1500,
//         count: 10
//     },
//     {
//         title: "Bicycle",
//         price: 2000,
//         count: 5
//     },
//     {
//         title: "Qwerty",
//         price: 100,
//         count: 52
//     },
//     {
//         title: "Nvidia",
//         price: 20000,
//         count: 7
//     }
// ]
/*
<div>
    <p>{title}</p>
    <p>Price: {price}</p>
    <p>Count: {count}</p>
</div>
*/
/*
<div>
    <p>Total price: {totalPrice}</p>
    <p>Total count: {totalCount}</p>
</div>
*/
// const productsElem = document.querySelector(".products")
// let totalPrice = 0
// let totalCount = 0
// for (let i = 0; i < products.length; i++) {
//     const {title, price, count} = products[i]
//     const pTitle = document.createElement("p")
//     pTitle.innerText = title
//     const pPrice = document.createElement("p")
//     pPrice.innerText = `Price: ${price}`
//     const pCount = document.createElement("p")
//     pCount.innerText = `Count: ${count}`
//     const divElem = document.createElement("div")
//     divElem.append(pTitle, pPrice, pCount)
//     productsElem.append(divElem)
//     totalPrice += price * count
//     totalCount += count
// }
// const totalDiv = document.createElement("div")
// const pTotalPrice = document.createElement("p")
// pTotalPrice.innerText = `Total price: ${totalPrice}`
// const pTotalCount = document.createElement("p")
// pTotalCount.innerText = `Total count: ${totalCount}`
// totalDiv.append(pTotalPrice, pTotalCount)
// productsElem.append(totalDiv)