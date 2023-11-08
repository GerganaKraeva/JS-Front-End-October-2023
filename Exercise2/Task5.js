function revealWords(words, text) {
    let wordsArr = words.split(", ");
    let textArr = text.split(" ");

    for (let i = 0; i < wordsArr.length; i++) {

        for (let j = 0; j < textArr.length; j++) {

            if ((wordsArr[i].length === textArr[j].length) && textArr[j].includes("*")) {
                textArr[j] = wordsArr[i];
            }

        }
    }
    console.log(textArr.join(" "));
}
revealWords("great, learning",

"softuni is ***** place for ******** new programming languages");