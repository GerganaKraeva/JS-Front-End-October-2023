function printEvryNthElement(input, step) {
    const newArr=[];

    for (let index = 0; index < input.length; index += step) {
       newArr.push(String(input[index]));
    }
    return newArr;
}
printEvryNthElement(['5',

'20',

'31',

'4',

'20'],

2);
printEvryNthElement(['dsa', 'asd', 'test', 'tset'], 2);
printEvryNthElement(['1', '2', '3', '4', '5'], 6);