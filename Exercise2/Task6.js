function printWordsWithHashTag (text) {
    let regExp = new RegExp("#[A-Za-z]+", "g");
    let maches = text.match(regExp);
    for (const word of maches) {
        let result="";
        for(let i=1; i<word.length;i++){
            result +=word[i];

        }
        console.log(result)
    }
   
}
printWordsWithHashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");