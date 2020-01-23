import apparel from '../data/apparel.js';
import renderApparel from './renderApparel.js';


const productList = document.getElementById('product-list');

for (let i = 0; i < apparel.length; i++) {
    const apparelList = apparel[i];

    const result = renderApparel(apparelList);

    productList.appendChild(result);

}





