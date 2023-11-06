function sortAscendingOrder(input) {

    input.sort((a, b) => {
        return a.localeCompare(b);
    });
    let index = 1;

    for (const name of input) {
        console.log(`${index}.${name}`);
        index++;
    }

}

sortAscendingOrder(["John", "Bob", "Christina", "Ema"]);