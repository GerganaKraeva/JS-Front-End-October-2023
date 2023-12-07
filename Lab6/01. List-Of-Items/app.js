function addItem() {
  const newUserInput = document.getElementById('newItemText');
  const li = document.createElement('li');
  li.textContent=newUserInput.value;
  const ul = document.getElementById('items');
  ul.appendChild(li);
  newUserInput.value = '';
}