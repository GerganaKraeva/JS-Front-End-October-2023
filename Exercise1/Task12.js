function resultOfOperations(numberAsString, first, second, third, fourth, fifth) {
    let arr = [];
    arr.push(first);
    arr.push(second);
    arr.push(third);
    arr.push(fourth);
    arr.push(fifth);
    let number=Number(numberAsString);
    let command = "";

    for (let i = 0; i < arr.length; i++) {
        command = arr[i];
        switch (command) {
            case "chop":
                number /=2;
                break;
            case "dice":
                number=Math.sqrt(number);
                break;
            case "spice":
                number+=1;
                break;
            case "bake":
                number*=3;
                break;
            case "fillet":
                number*=0.8;
                break;
        }
        console.log(number)
    }
}
resultOfOperations(32, "chop","chop","chop","chop","chop");
resultOfOperations(9, "dice","spice","chop","bake","fillet");