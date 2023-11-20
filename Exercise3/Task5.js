function palindromeOfIntegers(arr) {

    function isPalindrom(number) {
        let numberAsString = number.toString();
        let reversedNum = numberAsString.split('').reverse().join("");
        return numberAsString === reversedNum;
    }
    for (const num of arr) {
        console.log(isPalindrom(num));
    }

}

