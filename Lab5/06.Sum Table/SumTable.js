function sumTable() {
    const priceOfProducts = document.querySelectorAll('table tr');
    let sum = 0;

    for ( let i = 1; i < priceOfProducts.length; i++) {
        const current = priceOfProducts[i].children;
        const price= Number(current[1].textContent);
        sum +=price;
    }
    document.getElementById('sum').value = sum;

}