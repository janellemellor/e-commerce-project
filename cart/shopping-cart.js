import apparel from '../data/apparel.js';
import cartData from '../data/cart.js';
import renderLineItems from '../cart/render-line-items.js';
import findById from '../common/utils.js';


const table = document.getElementById('table');

for (let i = 0; i < apparel.length; i ++) {
    let cartItems = cartData[i];

    const findCartItemsById = findById(apparel.id, cartItems);

    const generateCart = renderLineItems(cartData, findCartItemsById);

    table.appendChild(generateCart);
   
}




