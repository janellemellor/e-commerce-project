import findById from '../common/utils.js';
import apparel from '../data/apparel.js';
// import cartData from '../data/cart.js';

export default function renderApparel(apparel) {
    const li = document.createElement('li');
    li.className = apparel.category;
    li.title = apparel.description;

    const h3 = document.createElement('h3');
    h3.textContent = apparel.name;
    li.appendChild(h3);

    const p = document.createElement('p');
    p.className = 'price';

    const USDollar = '$' + apparel.price.toFixed(2);
    p.textContent = USDollar;
    
    const img = document.createElement('img');
    img.src = '../assets/' + apparel.image;
    li.appendChild(img);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = apparel.id;
    button.addEventListener('click', () => {
        
        const aCart = localStorage.getItem('CART');
        
        const makeShoppingCart = () => {
            if (!aCart) {
                return [];  
            } else {
                return JSON.parse(aCart);
            }};
    
        const shoppingCart = makeShoppingCart();

        let apparelInCart = findById(shoppingCart.id, apparel);

        if (!apparelInCart) {
            const lineItemOne = {
                id: apparel.id,
                quantity: 1
            };

            shoppingCart.push(lineItemOne);
        } else {
            apparelInCart.quantity++;
        }

        const updatedCart = JSON.stringify(shoppingCart);
        localStorage.setItem('CART', updatedCart);
        
    });
    

    p.appendChild(button);

    li.appendChild(p);

    return li;
}
