import apparel from '../data/apparel.js';
import cartData from '../data/cart.js';
import renderLineItems from '../cart/render-line-items.js';
import findById, { calcOrderItem } from '../common/utils.js';


const table = document.getElementById('table');

for (let i = 0; i < cartData.length; i ++) {
    let cartItems = cartData[i];

    const findCartItemsById = findById(cartItems.id, apparel);

    const generateCart = renderLineItems(cartItems, findCartItemsById);


    

    table.appendChild(generateCart);
}



// Use the function to calculate the cart total and display the result in the appropriate element.


