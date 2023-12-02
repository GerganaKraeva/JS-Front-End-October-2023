function storeProvision(currentStock, orderedProduct) {
    let stock={};

    for ( let i=0; i < currentStock.length ; i+= 2) {
        let product=currentStock[i];
        let quantity=Number(currentStock[i+1]);
        
        if (!stock.hasOwnProperty(product)) {
           stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }
    }
    for ( let i=0; i < orderedProduct.length ; i+= 2) {
        let product=orderedProduct[i];
        let quantity=Number(orderedProduct[i+1]);
        
        if (!stock.hasOwnProperty(product)) {
           stock[product] = quantity;
        } else {
            stock[product] += quantity;
        }
    }
    for (const product in stock) {
        console.log(`${product} -> ${stock[product]}`)
    }
}

storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',
    
    '14', 'Pasta', '4', 'Beer', '2'
    
    ],
    
    [
    
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    
    'Tomatoes', '70', 'Bananas', '30'
    
    ]);