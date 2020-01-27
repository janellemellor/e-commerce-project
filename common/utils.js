export default function findById(itemId, cartArray) {
    for (let i = 0; i < cartArray.length; i++){
        const arrayItem = cartArray[i];
        if (itemId === arrayItem.id) {
            return arrayItem;
        }
    }
    return null;
}


export function calcLineItem(numberOfItems, itemPrice) {
    const price = numberOfItems * itemPrice;  
    const priceRounded = Math.round(price * 100) / 100;
    return priceRounded;
}



export function calcOrderItem(cart, apparel){
    let orderTotal = 0;
    
    for (let i = 0; i < cart.length; i++){
        orderTotal += calcLineItem(cart[i].quantity, findById(cart[i].id, apparel).price); 
    }
    return orderTotal.toFixed(2);
}