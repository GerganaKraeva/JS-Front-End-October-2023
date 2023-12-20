window.addEventListener("load", solve);

function solve() {
  const studentInput = document.getElementById('student');
  const universityInput = document.getElementById('university');
  const scoreInput = document.getElementById('score');
  const nextBtn = document.getElementById('next-btn');
  const formElement= document.querySelector('form');

  nextBtn.addEventListener('click', publish);

  function publish () {
    let isValidInput = studentInput.value ==='' ||
    universityInput.value ==='' || scoreInput.value ==='';

   if(isValidInput) {
    return;
   }

   const previewList = document.getElementById('preview-list');
  let candidatesList = document.getElementById('candidates-list');

   const li = document.createElement('li');
   li.classList.add('application');

   const  article= document.createElement('article');

   const h4=document.createElement('h4');
   h4.textContent=studentInput.value;
   const studentVal=studentInput.value;

   const paragraphUniversity=document.createElement('p');
   paragraphUniversity.textContent=`University: ${universityInput.value}`;
   const  universityVal=universityInput.value;


   const paragraphScore=document.createElement('p');
   paragraphScore.textContent=`Score: ${scoreInput.value}`;
   const scoreVal = scoreInput.value;

   article.appendChild(h4);
   article.appendChild(paragraphUniversity);
   article.appendChild(paragraphScore);


   const editBtn=document.createElement('button');
   editBtn.classList.add('action-btn');
   editBtn.classList.add('edit');
   editBtn.textContent='edit';
   editBtn.addEventListener('click', edit);

   const applyBtn=document.createElement('button');
   applyBtn.classList.add('action-btn');
   applyBtn.classList.add('apply');
   applyBtn.textContent='apply';
   applyBtn.addEventListener('click', apply);

   li.appendChild(article);
   li.appendChild(editBtn);
   li.appendChild(applyBtn);

   previewList.appendChild(li);

   nextBtn.disabled=true;
   formElement.reset();

   function edit() {
    studentInput.value = studentVal;
    universityInput.value =universityVal;
    scoreInput.value= scoreVal;
    previewList.removeChild(li);
    nextBtn.disabled=false;

   }

   function apply(){
    previewList.remove(li);
    li.removeChild(editBtn);
    li.removeChild(applyBtn);
    candidatesList.appendChild(li);
    nextBtn.disabled=false;

   }
  }
}
