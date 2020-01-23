export default function findById(itemId, cartArray) {
    for (let i = 0; i < cartArray.length; i++){
        const arrayItem = cartArray[i];
        if (itemId === arrayItem.id) {
            return arrayItem;
        }
    }
}


export function calcLineItem(numberOfItems, itemPrice) {
    const price = numberOfItems * itemPrice;  
    const priceRounded = Math.round(price * 100) / 100;
    return priceRounded;
}

