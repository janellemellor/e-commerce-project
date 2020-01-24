import calcLineItem from '../common/utils.js';

function renderLineItems(cartLineItem, correspondingProduct) {

    const tr = document.createElement('tr');  
    
    const nameTD = document.createElement('td');
    nameTD.textContent = correspondingProduct.name;
    tr.appendChild(nameTD);
    
    const quantityTD = document.createElement('td');
    quantityTD.textContent = cartLineItem.quantity;
    tr.appendChild(quantityTD);

    const priceTD = document.createElement('td');
    priceTD.textContent = correspondingProduct.price;
    tr.appendChild(priceTD);

    const cartTotal = document.createElement('td');

    cartTotal.textContent = calcLineItem(quantityTD, priceTD);
    tr.appendChild(cartTotal);

    tr.append(nameTD, quantityTD, priceTD, cartTotal);

    return tr;  
}

export default renderLineItems;
