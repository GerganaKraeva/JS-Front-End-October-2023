function passwordValidator(password) {

    function isValidLength(word) {
        return word.length >= 6 && word.length <= 10
    }

    if (!isValidLength(password)) {
        console.log(`Password must be between 6 and 10 characters`)
    }

    function isAlphanumeric(word) {
        let regex = /^[a-zA-Z0-9]+$/;
        let isCorrect = regex.test(word);
        return isCorrect
    }
    if (!isAlphanumeric(password)) {
        console.log(`Password must consist only of letters and digits`)
    }

    function checkDigits(word) {
        let digitsCounter = 0;

        for (const symbol of word) {
            if (!isNaN(symbol)) {
                digitsCounter++;
            }
        }
        return digitsCounter >= 2;
    }

    if (!checkDigits(password)) {
        console.log(`Password must have at least 2 digits`)
    }

    if(isValidLength(password) && isAlphanumeric(password) && checkDigits(password)) {
        console.log(`Password is valid`)
    }

}
passwordValidator(`login`)
passwordValidator(`MyPass123`)
passwordValidator(`Pa$s$s`)