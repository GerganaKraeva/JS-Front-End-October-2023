function mathOperation(a, b, symbol) {
    switch (symbol) {
        case "+":
            console.log(a + b);
            break;
        case "-":
            console.log(a - b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "/":
            console.log(a / b);
            break;
        case "**":
            console.log(a ** b);
            break;
        case "%":
            console.log(a % b);
            break;

    }
}
mathOperation(2,8,"+");