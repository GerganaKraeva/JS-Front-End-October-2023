function pascalCaseSplitter(text) {
    let regExp = new RegExp("[A-Z][a-z]*", "g");
    let maches = text.match(regExp);
    console.log(maches.join(", "));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
