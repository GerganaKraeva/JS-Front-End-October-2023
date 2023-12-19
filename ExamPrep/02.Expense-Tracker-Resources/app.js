window.addEventListener("load", solve);


function solve() {
  let expenseTypeInput = document.getElementById('expense');
  let amountInput = document.getElementById('amount');
  let dateInput = document.getElementById('date');
  let addBtn = document.getElementById('add-btn');
  let deleteBtn = document.querySelector('.btn delete');

  let formElement = document.querySelector('form');

  addBtn.addEventListener('click', publish);


  function publish() {

    let isValidInput = expenseTypeInput.value === '' || amountInput.value === '' || dateInput.value === '';
    if (isValidInput) {
      return;
    }

    let reviewList = document.getElementById('preview-list');
    let publishedList = document.getElementById('expenses-list');

    let li = document.createElement('li');
    li.classList.add('expense-item');

    let articleElement = document.createElement('article');

    let expenseParagraph = document.createElement('p');
    expenseParagraph.textContent = `Type: ${expenseTypeInput.value}`;
    let expense = expenseTypeInput.value;

    let amountParagraph = document.createElement('p');
    amountParagraph.textContent = `Amount: ${amountInput.value}$`;
    let amountVal = amountInput.value;

    let dateParagraph = document.createElement('p');
    dateParagraph.textContent = `Date: ${dateInput.value}`;
    let dateVal = dateInput.value;

    articleElement.appendChild(expenseParagraph);
    articleElement.appendChild(amountParagraph);
    articleElement.appendChild(dateParagraph);

    let div = document.createElement('div');
    div.classList.add('buttons');


    let editBtn = document.createElement('button');
    editBtn.classList.add('btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'edit';
    editBtn.addEventListener('click', edit);


    let okBtn = document.createElement('button');
    okBtn.classList.add('btn');
    okBtn.classList.add('ok');
    okBtn.textContent = 'ok';
    okBtn.addEventListener('click', post);


    div.appendChild(editBtn);
    div.appendChild(okBtn);


    li.appendChild(articleElement);
    li.appendChild(div);

    reviewList.appendChild(li);

    addBtn.disabled = true;
    formElement.reset();

    function edit() {
      expenseTypeInput.value = expense;
      amountInput.value = amountVal;
      dateInput.value = dateVal;

      reviewList.removeChild(li);

      addBtn.disabled = false;
    }

    function post() {
      reviewList.remove(li);
      li.removeChild(div);
      publishedList.appendChild(li);
      okBtn.disabled = false;

      deleteBtn.addEventListener('click', () => {
        location.reload();
      });

    }
  }

}
