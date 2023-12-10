function addItem() {
    let textItem=document.getElementById('newItemText');
    let textValue=document.getElementById('newItemValue');
    let menu=document.getElementById('menu');
    let option=document.createElement('option');
    option.textContent=textItem.value;
    option.value=textValue.value;

    if(textItem.value !== '' && textValue.value !== ''){
        menu.appendChild(option);
    }
    textItem.value='';
    textValue.value='';

}