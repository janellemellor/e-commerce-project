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


export function calcOrderItem(cartData, apparel) {
    for(let i =0; i < cartData.length; i++) {
        
        const orderTotal = calcLineItem(cartData.quantity, apparel.price);

        const orderTotalRounded = Math.round(price * 100) / 100;
        return orderTotalRounded;

}


// TDD test in /test/utils.js for a function that lives in /common/utils.js called calcOrderItem. This function takes the cart array and products array. Calculate the total of your cart data as the expected value.

