// let user = ['John', 'Dow', 'Programmer', 4000, 30]
// console.log(`Name of user ${user[0]}`);
// console.log(`Lastname of user ${user[1]}`);
// console.log(`Age of user ${user[4]}`);

// ============ objects ============
// const user = {
//     'first name': 'John',
//     lastName: 'Dow',
//     profession: 'Programmer',
//     salary: 4000,
//     age: 30,
//     active: true,
//     address: {
//         country: "Germany",
//         city: "Berlin"
//     }
// }
// console.log(user);
// user.age = 45
// user.skills = ['php', 'c++', 'c#']
// console.log(`Firstname of user ${user['first name']}`);
// console.log(`Lastname of user ${user['lastname']}`);
// console.log(`Age of user ${user.age}`);
// console.log(`Active status of user ${user.active}`);
// console.log(`Address of user: Country ${user.address.country} | City ${user.address['city']}`);
// console.log(`Skills of user: ${user.skills}`);

// Создать объект с названием и ценой продукта и вывести данные в консоль.
// const product = {
//     name: "Macbook",
//     price: 4000
// }
// console.log(`Product name: ${product.name}`)
// console.log(`Product price: ${product.price}`)

// ============ array of objects ============
// const users = [
//     {
//         id: 1,
//         name: "John",
//         age: 20,
//     },
//     {
//         id: 2,
//         name: "Mary",
//         age: 25,
//     },
//     {
//         id: 3,
//         name: "Bob",
//         age: 30,
//     }
// ]

// for (let i = 0; i < users.length; i++) {
//     console.log(`User id: ${users[i].id}`);
//     console.log(`User name: ${users[i].name}`);
//     console.log(`User age: ${users[i].age}`);
//     console.log('============');
// }

// Создать массив из объектов продуктов (свойства title, price, type) и, пройдясь циклом по массиву, сформировать строки. Вывести их в консоль.
// const products = [
//     {
//         title: "Lenovo",
//         price: 3000,
//         type: "Laptop",
//         discount: 25
//     },
//     {
//         title: "Blender",
//         price: 1500,
//         type: "Electronics",
//         discount: 13
//     },
//     {
//         title: "Bicycle",
//         price: 2000,
//         type: "Sport",
//         discount: 17
//     },
//     {
//         title: "Qwerty",
//         price: 100,
//         type: "Notebook",
//         discount: 8
//     },
//     {
//         title: "Nvidia",
//         price: 20000,
//         type: "Electronics",
//         discount: 10
//     }
// ]
// for (let i = 0; i < products.length; i++) {
//     const {title, price, type, discount} = products[i]
//     console.log(`Title of product: ${title}`);
//     console.log(`Price of product: ${price}`);
//     console.log(`Type of product: ${type}`);
//     console.log(`Discount of product: ${discount}`);
//     console.log('============');
// }

// Пройдитесь циклом по массиву объектов и найдите общую сумму товаров.
// let totalPrice = 0
// for (let i = 0; i < products.length; i++) {
//     totalPrice += products[i].price
// }
// console.log(totalPrice);

// Вывести название товаров, которые дороже 15000
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price > 15000) {
//         console.log(`Title of product: ${products[i].title}`);
//     }
// }

// Вывести названия товаров и цену со скидкой. В процессе решения задачи используйте деструктурирующее присваивание
// price - price * discount / 100
// for (let i = 0; i < products.length; i++) {
//     const {title:productName, discount, price} = products[i]
//     console.log(`Product name: ${productName}`)
//     console.log(`Product original price: ${price}. Discount: ${discount}`)
//     console.log(`Product price after discount: ${price - price * discount / 100}`)
//     console.log('============')
// }

// Пройтись циклом по массиву и вывести только спортивные товары(type, Sport).
// for (let i = 0; i < products.length; i++) {
//     const {title, price, type, discount} = products[i]
//     if(type === "Sport") {
//         console.log(`Title of product: ${title}`);
//         console.log(`Price of product: ${price}`);
//         console.log(`Type of product: ${type}`);
//         console.log(`Discount of product: ${discount}`);
//     }
// }

// Создать новый пустой массив. Пройтись циклом по массиву с продуктами и в новый массив добавить те продукты, которые дешевле 15000.
// const newProducts = []
// for (let i = 0; i < products.length; i++) {
//     if (products[i].price < 15000) {
//         newProducts.push(products[i])
//     }
// }
// console.log(newProducts);