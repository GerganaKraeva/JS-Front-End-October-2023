function loadingBar(number) {
    if (number===100){
        console.log(`100% Complete!`)
    } else {
        let display="%".repeat(number/10)+".".repeat(10-number/10);
        console.log(`${number}% [${display}]`)
        console.log(`Still loading...`)
    }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);