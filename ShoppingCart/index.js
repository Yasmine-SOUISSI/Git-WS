// Select the elements by querySelector
// querySelector return the first element with the selector (id, class, tag)
let quantity = document.querySelector(".quantity");
console.log(quantity);

let shoppingCart = document.querySelector(".shopping");
console.log('shoppingCart---->', shoppingCart);

let closeShoppingCart = document.querySelector(".closeShopping");


// When the click on the shopping cart icon we'll add the class active to the body to show the shopping cart
// Active class is defined in the css file
shoppingCart.addEventListener('click', function () {
    document.body.classList.add('active');
})
// When the click on the close icon we'll remove the class active from the body to hide the shopping cart
closeShoppingCart.addEventListener('click', function () {
    document.body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: '1.PNG',
        price: 120000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: '2.PNG',
        price: 120000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: '3.PNG',
        price: 220000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: '4.PNG',
        price: 123000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: '5.PNG',
        price: 320000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: '6.PNG',
        price: 120000
    }
];

// Create a function to display the products
// Function will append the products to the element with the class list

let list = document.querySelector('.list');
console.log('list---->', list);

function displayProducts() {
    // Loop over the products array
    for (let i = 0; i < products.length; i++) {
        // Create a new element to store the product
        newElement = document.createElement('div');
        // Add the class item to the new element
        newElement.classList.add('item');
        // Add the product data to the new element
        newElement.innerHTML = `
        <img src="image/${products[i].image}">
        <div class="title">${products[i].name}</div>
        <div class="price">${products[i].price.toLocaleString()}</div>
        <button onclick="addToCard(${i})">Add To Card</button>`;
        list.appendChild(newElement);
    }
}

displayProducts();
let productsCard = [];
function addToCard(i) {
    // Loop over the productsCard array
    for (let j = 0; j < productsCard.length; j++) {
        // Product to add is already in the card increase the quantity
        if (productsCard[j].id == products[i].id) {
            productsCard[j].quantity++;
            displayCard();
            return;
        }
    }
    // else add the product to the card
    productsCard.push({
        ...products[i],
        quantity: 1
    });
    displayCard();
}
function changeQuantity(i, quantity) {
    if (quantity < 1) {
        return;
    }
    productsCard[i].quantity = quantity;
    console.log('productsCard---->', productsCard);
    displayCard();
}

let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
function displayCard() {
    let sum = 0;
    console.log('productsCard---->', productsCard);
    listCard.innerHTML = '';
    for (let i = 0; i < productsCard.length; i++) {
        newElement = document.createElement('li');
        newElement.innerHTML = `
                <div><img src="image/${productsCard[i].image}"/></div>
                <div>${productsCard[i].name}</div>
                <div>${productsCard[i].price.toLocaleString()}</div>
                <div>
                <button onclick="changeQuantity(${i}, ${productsCard[i].quantity - 1})">-</button>
                <div class="count">${productsCard[i].quantity}</div>
                <button onclick="changeQuantity(${i}, ${productsCard[i].quantity + 1})">+</button>
                </div>
                <button onclick="removeFromCard(${i})">Remove</button>
                </div>`;
        listCard.appendChild(newElement);
        sum += productsCard[i].price * productsCard[i].quantity;
    }
    total.innerHTML = sum.toLocaleString();
}

function removeFromCard(i) {
    console.log('i---->', i);
    // filter is a function that return a new array with the elements that return true from the function passed to it (callback function)
    // store the new array in the productsCard array
    productsCard = productsCard.filter((_, index) => index != i);
    displayCard();
}



console.log('productsCard---->', productsCard);