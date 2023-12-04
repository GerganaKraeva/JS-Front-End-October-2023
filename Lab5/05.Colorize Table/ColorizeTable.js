function colorize() {
    const selectedItem =Array.from(document.getElementsByTagName('tr'));

    for (let i =0; i < selectedItem.length; i++) {
        if(i % 2 !== 0){
            selectedItem[i].style.background = 'teal';
        }
    }
}