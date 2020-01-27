import apparel from '../data/apparel.js';
import renderLineItems from '../cart/render-line-items.js';
import findById, { calcOrderItem } from '../common/utils.js';


const table = document.getElementById('table');
const displayOrder = document.getElementById('order-total');
const placeOrderButton = document.getElementById('order-button');

const getCartFromLocalStorage = localStorage.getItem('CART');
let theCart;
if (getCartFromLocalStorage) {
    theCart = JSON.parse(getCartFromLocalStorage);
}
else {
    theCart = [];
}

for (let i = 0; i < theCart.length; i ++) {
    let cartItems = theCart[i];

    const findCartItemsById = findById(cartItems.id, apparel);

    const generateCart = renderLineItems(cartItems, findCartItemsById);

    table.appendChild(generateCart);
}

const orderTotal = calcOrderItem(theCart, apparel);
displayOrder.textContent = orderTotal;

if (theCart.length === 0) {
    placeOrderButton.disabled = true;
} 
else {
    placeOrderButton.addEventListener('click', () => {
        alert('Here is your order' + JSON.stringify(theCart, true, 2));
        localStorage.removeItem('CART');
    });
}
   

