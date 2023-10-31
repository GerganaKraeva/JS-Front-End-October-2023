function sumOfDigits(number) {
    let numAsString=String(number);
    let sum=0;

    for (let i=0; i<numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }
    console.log(sum);
}
sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);