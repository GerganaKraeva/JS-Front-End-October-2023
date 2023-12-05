function solve() {
  let inputText = document.getElementById('text').value.toLowerCase();
  let caseUser = document.getElementById('naming-convention').value;
  let transformedText = document.getElementById('result');

  if (caseUser === 'Camel Case') {
    let sentence = [];
    inputText = inputText.split(' ');
    sentence.push(inputText[0]);
    for (let index = 1; index < inputText.length; index++) {
      sentence.push(inputText[index].charAt(0).toUpperCase() + inputText[index].slice(1));
    }
    transformedText.textContent=sentence.join('');
  } else if (caseUser === 'Pascal Case') {
    let sentence = [];
    inputText = inputText.split(' ');
    for (let index = 0; index < inputText.length; index++) {
      sentence.push(inputText[index].charAt(0).toUpperCase() + inputText[index].slice(1));
    }
    transformedText.textContent=sentence.join('');
  } else {
    transformedText.textContent='Error!';
  }
}








