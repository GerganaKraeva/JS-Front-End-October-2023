 /* function solve(text, word) {
    while (text.includes(word)) {
       text = text.replace(word,"*". repeat(word.length));
    }
    console.log(text);
}
solve("A small sentence with some words",
    "small"); 
    */

    function solve(text,word) {
        console.log(text.replace(new RegExp(word,'g') ,"*".repeat(word.length)));
    }
    solve("A small sentence with some words",
    "small"); 