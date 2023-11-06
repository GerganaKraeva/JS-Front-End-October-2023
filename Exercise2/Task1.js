function rotationArray(input, number) {
    /*const newArr=[];
        if (number>input.length) {
            number=number -input.length ;
        }
    
        for (let index = number; index < input.length; index++) {
           newArr.push(input[index]); 
        }
        for (let index = 0; index < number; index++) {
            newArr.push(input[index]); 
        }
        console.log(newArr.join(" "));
        */
    for (let i = 0; i < number; i++) {
        let deleteEl = input.shift();
        input.push(deleteEl);
    }
    console.log(input.join(" "));
}
rotationArray([51, 47, 32, 61, 21], 2);
rotationArray([32, 21, 61, 1], 4);
rotationArray([2, 4, 15, 31], 5);