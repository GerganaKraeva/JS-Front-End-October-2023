function solve() {

    const addButtons = Array.from(document.querySelectorAll('button.add-product'));
    const checkoutBtn = document.querySelector('button.checkout');
    const textArea = document.querySelector('textarea');
    const buttons=document.querySelectorAll('button');
    let boughtProducts = [];
    let totalPrice = 0;

        addButtons.forEach(btn => {
            btn.addEventListener('click', addElementInTheCard);
        });

    function addElementInTheCard(e) {
        const currentProduct = e.currentTarget.parentNode.parentNode;
        const productTitle = currentProduct.querySelector('.product-title').textContent;
        const productPrice = currentProduct.querySelector('.product-line-price').textContent;


        if (!boughtProducts.includes(productTitle)) {
            boughtProducts.push(productTitle);
        }
        totalPrice += Number(productPrice);

        textArea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`
    }
    checkoutBtn.addEventListener('click', checkOut);

    function checkOut(e) {
        textArea.value += `You bought ${boughtProducts.join(', ')} for ${totalPrice.toFixed(2)}.`;

        buttons.forEach(btn=>
            btn.disabled=true);


        // addButtons.forEach(btn => {
        //     btn.removeEventListener('click', addElementInTheCard);
        // });
    }
}