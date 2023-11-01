function checkIfDigitsAreTheSame(number) {
    let numAsString = String(number);
    let firstDigit=numAsString[0];
    let areEqual=true;
    let sum=0;

    for (let i = 0; i < numAsString.length ; i++) {
        sum +=Number(numAsString[i]);
        if (numAsString[i] !== firstDigit) {
            areEqual=false;
        }
    }
    console.log(areEqual);
    console.log(sum)
}
checkIfDigitsAreTheSame(222222);
checkIfDigitsAreTheSame(1234);
