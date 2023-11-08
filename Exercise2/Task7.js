function substring(word, text) {
    let wordsInText=text.split(" ");
    let isFound=false;

    for (let i=0; i<wordsInText.length; i++) {
        if (word.toUpperCase()===wordsInText[i].toUpperCase()) {
            isFound=true;
            break;
        }
    }
    if (isFound) {
        console.log(word);
    } else {
        console.log(`${word} not found!`)
    }
}
substring ('javascript','JavaScript is the best programming language');
substring('python','JavaScript is the best programming language');