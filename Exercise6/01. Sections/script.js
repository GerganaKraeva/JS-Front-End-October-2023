function create(words) {
   const mainDiv = document.getElementById('content');


   for (const word of words) {
      const innerDiv = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display= 'none';
      innerDiv.appendChild(p);
      mainDiv.appendChild(innerDiv);

      innerDiv.addEventListener('click', showText);

      function showText() {
         p.style.display = '';
      }
   }
}