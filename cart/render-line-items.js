import { calcLineItem, calcOrderItem } from '../common/utils.js';

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

    const lineItemTotal = document.createElement('td');

    const totalLineItems = calcLineItem(cartLineItem.quantity, correspondingProduct.price);
    
    lineItemTotal.textContent = totalLineItems;

    tr.appendChild(lineItemTotal);

    

    return tr;  
}

export default renderLineItems;
