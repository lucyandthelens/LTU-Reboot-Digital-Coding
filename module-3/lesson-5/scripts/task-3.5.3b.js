function betweenPrices( arr, lowPrice, highPrice ) {

    let arrItems = [];

    for( let index = 0; index < arr.length; index++ ) {

        if( arr[ index ].price >= lowPrice && arr[ item ].price < highprice ) {

            arrItems.push( arr[ index ].name );
        }
    }

    return arrItems;
}

console.log( betweenPrices( shoppingcart, 2, 5));
console.log( betweenPrices( shoppingcart, 4, 10));
    console.log( betweenPrices( shoppingcart, 2, 4));