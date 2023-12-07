function addItem() {
  const newUserInput = document.querySelector('#newItemText');
  const li = document.createElement('li');
  li.textContent=newUserInput.value;

  const deleteLink =document.createElement('a');
  deleteLink.href='#';
  deleteLink.textContent='[Delete]';
  deleteLink.addEventListener('click',deleteItem);
  li.appendChild(deleteLink);
  const ul = document.getElementById('items');
  ul.appendChild(li);

  newUserInput.value = '';

  function deleteItem(e) {
    const row = e.currentTarget.parentNode;
    row.remove();
  }
}