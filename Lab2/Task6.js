function countOccurances(text, search) {

    let words = text.split(" ");
    let counter = 0;

    for (const word of words) {
        if (word === search) {
            counter++;
        }
    }
    console.log(counter);
}


countOccurances("This is a word and it also is a sentence", "is");