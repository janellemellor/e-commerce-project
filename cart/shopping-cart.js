import apparel from '../data/apparel.js';
import cartData from '../data/cart.js';
import renderLineItems from '../cart/render-line-items.js';
import findById, { calcOrderItem, calcLineItem } from '../common/utils.js';


const table = document.getElementById('table');


const displayOrder = document.getElementById('order-total');

for (let i = 0; i < cartData.length; i ++) {
    let cartItems = cartData[i];

    const findCartItemsById = findById(cartItems.id, apparel);

    const generateCart = renderLineItems(cartItems, findCartItemsById);

    table.appendChild(generateCart);


    const orderTotal = calcOrderItem(cartData, apparel);
    console.log(orderTotal);
    console.log(generateCart);
    console.log(findCartItemsById);
    
    console.log('are you working' + displayOrder);

    displayOrder.textContent = orderTotal;


   
}





