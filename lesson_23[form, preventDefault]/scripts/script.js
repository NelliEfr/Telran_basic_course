const productNameInp = document.querySelector(".product-name")
const productPriceInp = document.querySelector(".product-price")
const productsContainer = document.querySelector(".products-container")
const productForm = document.querySelector("#product-form")
// productNameInp.value = "Hello"
// productPriceInp.value = "World"

// 1. Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.

// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.
// {
//     name: "name",
//     price: 1000
// }

const products = []

// 3. Добавить функцию, которая получает наименование карточки и цену и возвращает Node с карточкой товара.
// createProductNode()
/*
<div class="product-item">
    <p>{name}</p>
    <p>{price}</p>
</div>
*/

function createProductNode(name, price) {
    const pNameElem = document.createElement("p")
    const pPriceElem = document.createElement("p")
    pNameElem.innerText = name
    pPriceElem.innerText = price
    const divProductElem = document.createElement("div")
    divProductElem.classList.add("product-item")
    divProductElem.append(pNameElem, pPriceElem)

    return divProductElem
}

// Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.

function rerender() {
    productsContainer.innerHTML = ""
    for (let i = 0; i < products.length; i++) {
        const {name, price} = products[i]
        const productCard = createProductNode(name, price)
        productsContainer.append(productCard)
    }
}

productForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const product = {
        name: productNameInp.value,
        price: productPriceInp.value
    }
    products.push(product)
    rerender()
    
    // productNameInp.value = ""
    // productPriceInp.value = ""
    productForm.reset()
})