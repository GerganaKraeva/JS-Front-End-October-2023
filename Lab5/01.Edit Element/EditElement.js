function editElement(referance, match, replacer) {
    const content = referance.textContent;
    const editText=content.replace(new RegExp(match,'g'),replacer);
    referance.textContent=editText;
    }