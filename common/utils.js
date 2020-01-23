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





// function calcLineItem
// TDD test in /test/utils.js for a function that lives in /common/utils.js called calcLineItem. This function takes quantity and an amount and returns the total. Due to how JavaScript uses floating point numbers, you may need to round the result to two decimal places using: Math.round(amount * 100) / 100