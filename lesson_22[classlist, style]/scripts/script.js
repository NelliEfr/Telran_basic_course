// const pElem = document.querySelector("p")
// pElem.classList.add("paragraph", "hobbies")
// pElem.classList.remove("text", "box")
// pElem.classList.toggle("about")
// console.log(pElem.classList.contains("about"))
// console.log(pElem.classList.contains("hello"))
// console.log(pElem.classList)

// Реализовать 10 карточек с числами от 0 до 9 и при нажатии на какую-либо карточку присвоить ей класс active. В классе active должны быть стили, которые меняют цвет текста и цвет заднего фона местами.
/* <div class="card">{number}</div> */
// Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.

// const divNumberCards = document.querySelector(".number-cards")
// for (let i = 0; i <= 10; i++) {
//     const cardElem = document.createElement("div") // <div></div>
//     cardElem.classList.add("card") // <div class="card"></div>
//     cardElem.innerText = i // <div class="card">{i}</div>
//     divNumberCards.append(cardElem)
//     cardElem.addEventListener("click", function() {
        // cardElem.classList.add("active")
        // 1
        // if(cardElem.classList.contains("active")) {
        //     cardElem.classList.remove("active")
        // } else {
        //     cardElem.classList.add("active")
        // }
        // 2
//         cardElem.classList.toggle("active")
//     })
// }

// Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. 
//Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно. 
//*  Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.
// const words = [
//     {
//         ru: "кот",
//         en: "cat"
//     },
//     {
//         ru: "собака",
//         en: "dog"
//     },
//     {
//         ru: "птица",
//         en: "bird"
//     },
//     {
//         ru: "цветок",
//         en: "flower"
//     }
// ]
/* 
<div class="card">
    <p>{ru}</p>
    <p class="hidden">{en}</p>
</div>
*/
// const wordsDiv = document.querySelector(".words-cards")
// const cardsObjects = []
// for (let i = 0; i < words.length; i++) {
//     const {ru, en} = words[i]
//     const pRu = document.createElement("p")
//     const pEn = document.createElement("p")
//     pRu.innerText = ru
//     pEn.innerText = en
//     pEn.classList.add("hidden")
//     const divCard = document.createElement("div")
//     divCard.append(pRu, pEn)
//     divCard.classList.add("card")
//     wordsDiv.append(divCard)
//     divCard.addEventListener("click", function () {
//         pEn.classList.toggle("hidden")
//         pRu.classList.toggle("hidden")
//     })
//     cardsObjects.push({
//         pEn,
//         pRu
//     })
// }
// Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.
// const ruBtn = document.querySelector(".ru-btn")
// const enBtn = document.querySelector(".en-btn")
// ruBtn.addEventListener("click", function() {
//     for (let i = 0; i < cardsObjects.length; i++) {
//         cardsObjects[i].pRuElem.classList.remove("hidden")
//         cardsObjects[i].pEnElem.classList.add("hidden")
//     }
// })
// enBtn.addEventListener("click", function() {
//     for (let i = 0; i < cardsObjects.length; i++) {
//         cardsObjects[i].pRuElem.classList.add("hidden")
//         cardsObjects[i].pEnElem.classList.remove("hidden")
//     }
// })
