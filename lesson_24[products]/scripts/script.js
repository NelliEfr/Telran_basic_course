const productNameInp = document.querySelector(".product-name")
const productPriceInp = document.querySelector(".product-price")
const productsContainer = document.querySelector(".products-container")
const productForm = document.querySelector("#product-form")
const productSearchForm = document.querySelector("#search-filters-form")
const productSearchName = document.querySelector(".product-search-name")
const sortFieldSelect = document.querySelector("#sort-field")
// productNameInp.value = "Hello"
// productPriceInp.value = "World"

// 1. Создать форму в html (наименование товара и цена) и добавить скрипт, чтобы при отправке формы данные из нее выводились в консоль.

// 2. Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив с продуктами в виде объекта.
// {
//     name: "name",
//     price: 1000
// }

let products = []

// 3. Добавить функцию, которая получает наименование карточки и цену и возвращает Node с карточкой товара.
// createProductNode()
/*
<div class="product-item">
    <p>{name}</p>
    <p>{price}</p>
    <div class="remove-btn">X</div>
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

// Добавить функцию, которая возвращает кнопку в виде крестика в красном кружке.
// <div class="remove-btn">X</div>
// createRemoveBtn

function createRemoveBtn() {
    const removeDiv = document.createElement("div")
    removeDiv.innerText = "X"
    removeDiv.classList.add("remove-btn")
    return removeDiv
}

// Разработать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек с товарами из массива. Настроить rerender при добавлении нового продукта.
// Доработать rerender таким образом, чтобы при двойном клике по карточке в консоль выводилось название товар.
// Доработать rerender таким образом, чтобы при двойном клике по карточке из массива удалялся товар по индексу и вызывался rerender.
// Добавить в rerender добавление крестика в верхнем правом углу карточки товара.
// Добавить отображение фразы “товаров нет”, когда товаров нет.
// <h1>Товаров нет</h1>
function rerender() {
    productsContainer.innerHTML = ""
    if (products.length === 0) {
        const emptyMessageTitle = document.createElement("h1")
        emptyMessageTitle.innerText = "Товаров нет"
        productsContainer.append(emptyMessageTitle)
        return
    }
    for (let i = 0; i < products.length; i++) {
        const {name, price} = products[i]
        const productCard = createProductNode(name, price)
        const removeBtn = createRemoveBtn()
        productCard.append(removeBtn)
        removeBtn.addEventListener("click", function() {
            products.splice(i, 1)
            rerender()
        })
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

// Добавить форму в HTML с полем ввода и кнопкой для поиска по товарам. Реализовать скрипт, который получает из формы строку при submit и выводит в консоль.
// Меняем вызов обработчика формы с submit на change и убираем кнопку из формы.
// Сделать сортировку товаров по названию по нажатию по кнопке.

productSearchForm.addEventListener("change", function(event) {
    event.preventDefault()
    if (sortFieldSelect.value === "name") {
        products = products.sort(function(a, b) {
            if (a.name === b.name) {
                return 0
            } else if (a.name > b.name) {
                return 1
            } else if (a.name < b.name) {
                return -1
            }
            // return a.name.localeCompare(b.name)
        })
    } else if (sortFieldSelect.value === "price") {
        products = products.sort(function(a, b) {
            return a.price - b.price
        })
    }

    if (productSearchName.value !== "") {
        products = products.filter(function(product) {
            return product.name.startsWith(productSearchName.value)
        })
    }

    rerender()
})
