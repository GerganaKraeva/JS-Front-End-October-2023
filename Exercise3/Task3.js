function printCharactersInGivenRange (startChar, endChar) {
    let result=``;
    let start = Math.min(startChar.charCodeAt(), endChar.charCodeAt());
    let end = Math.max(startChar.charCodeAt(), endChar.charCodeAt())

    for (let currentCode=start+1; currentCode < end; currentCode++) {
        const currentChar=String.fromCharCode(currentCode);
        result += `${currentChar} `;
    }
    console.log(result.trimEnd());
} 
printCharactersInGivenRange('a', 'd');