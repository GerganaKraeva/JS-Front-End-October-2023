function subtract() {
    const firstNum=Number(document.getElementsByTagName('input')[0].value);
    const secondNum=Number(document.getElementsByTagName('input')[1].value);
    let sum=firstNum-secondNum;
    document.getElementById('result').textContent=sum;
}