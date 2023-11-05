function evenAndOddSubstraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;

    for (let i = 0 ; i < arr.length; i++) {
        const currentNumber = Number(arr[i]);
        const isEven = currentNumber % 2 === 0;

        if (isEven) {
            sumEven += currentNumber;
        } else {
            sumOdd += currentNumber;
        }
    }

    console.log(sumEven - sumOdd);
}


evenAndOddSubstraction([1, 2, 3, 4, 5, 6]);

