import calcLineItem from '../common/utils.js';

function renderLineItems(cartLineItem, correspondingProduct) {

    for (let i = 0; i < correspondingProduct.length; i ++) {

        const tr = document.createElement('tr');     
        const nameTD = document.createElement('td');
        nameTD.textContent = cartLineItem.name;
        tr.appendChild(nameTD);
    
        const quantityTD = document.createElement('td');
        quantityTD.textContent = cartLineItem.quantity;
        tr.appendChild(quantityTD);

        const priceTD = document.createElement('td');
        priceTD.textContent = cartLineItem.price;
        tr.appendChild(priceTD);

        const cartTotal = document.createElement('td');

        cartTotal.textContent = calcLineItem(quantityTD, priceTD);
        tr.appendChild(cartTotal);

        tr.append(nameTD, quantityTD, priceTD, cartTotal);

        return tr;
    
    }
}

export default renderLineItems;

//Re-working the code below: 

// function renderLineItems{

//     const trOne = document.createElement('tr'); 
    
//     const thOne = document.createElement('th)');
//     thOne.textContent = 'Item Description';
//     trOne.appendChild(thOne);

//     const thTwo = document.createElement('th)');
//     thTwo.textContent = 'Quantity';
//     trOne.appendChild(thTwo);

//     const thThree = document.createElement('th)');
//     thThree.textContent = 'Item Description';
//     trOne.appendChild(thThree);

//     const trTwo = document.createElement('tr');

//     const itemOneName = document.createElement('td');
//     itemOneName.textContent = 'correspondingProduct.name';
//     trTwo.appendChild(itemOneName);

//     const itemOneQuantity = document.createElement('td');
//     itemOneQuantity.textContent = 'correspondingProduct.quantity';
//     trTwo.appendChild(itemOneQuantity);

//     const itemOnePrice = document.createElement('td');
//     itemOnePrice.textContent = 'correspondingProduct.price';
//     trTwo.appendChild(itemOnePrice);

//     const trThree = document.createElement('tr');

//     const itemTwoName = document.createElement('td');
//     itemTwoName.textContent = 'correspondingProduct.name';
//     trThree.appendChild(itemTwoName);

//     const itemTwoQuantity = document.createElement('td');
//     itemTwoQuantity.textContent = 'correspondingProduct.quantity';
//     trThree.appendChild(itemTwoQuantity);

//     const itemTwoPrice = document.createElement('td');
//     itemTwoPrice.textContent = 'correspondingProduct.price';
//     trThree.appendChild(itemTwoPrice);

//     const trFour = document.createElement('tr');

//     const itemThreeName = document.createElement('td');
//     itemThreeName.textContent = 'correspondingProduct.name';
//     trFour.appendChild(itemThreeName);
 
//     const itemThreeQuantity = document.createElement('td');
//     itemThreeQuantity.textContent = 'correspondingProduct.quantity';
//     trFour.appendChild(itemThreeQuantity);
 
//     const itemThreePrice = document.createElement('td');
//     itemThreePrice.textContent = 'correspondingProduct.price';
//     trFour.appendChild(itemThreePrice);

//     const trFive = document.createElement('tr');

//     const cartTotal = document.createElement('td');
//     cartTotal.textContent = ('cartLineItem.quantity * correspondingProduct.price');
//     trFive.appendChild(cartTotal);


//     trOne.appendChild(trTwo);
//     trTwo.appendChild(trThree);
//     trThree.appendChild(trFour);
//     trFour.appendChild(trFive);
    
//     return trOne;

// }

// 
 