function toggle() {
    let textOfButton = document.getElementsByClassName('button')[0];
    let moreText=document.getElementById('extra');

    if( textOfButton.textContent === 'More') {
        textOfButton.textContent='Less';
        moreText.style.display='block';
    } else {
        textOfButton.textContent='More';
        moreText.style.display='none';
    }
}