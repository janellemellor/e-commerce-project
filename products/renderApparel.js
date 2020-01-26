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
       const shoppingCart = localStorage.getItem('CART');
       if(!shoppingCart) {
        return [];  
    } else {
        return JSON.parse(shoppingCart);
     

        } if(shoppingCart ) {return 

    }

      

    p.appendChild(button);

    li.appendChild(p);

    return li;
} 
