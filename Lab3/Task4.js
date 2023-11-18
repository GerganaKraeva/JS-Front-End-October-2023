function getOrderPrice(order, quantity) {
    const drinkPrices = {
        coffee: 1.50,
        water: 1.00,
        coke: 1.40,
        snacks: 2.00,
    };

    const price =drinkPrices[order];
    const totalPrice=price*quantity;
    console.log(totalPrice.toFixed(2));
}

getOrderPrice("water",5);
getOrderPrice("coffee", 2);

