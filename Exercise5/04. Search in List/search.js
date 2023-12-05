function search() {
   const towns = Array.from(document.getElementsByTagName('li'));
   const input = document.getElementById('searchText').value;
   const result = document.getElementById('result')
   let counter = 0;
   for (const town of towns) {
      town.style.textDecoration = '';
      town.style.fontWeight = '';

   }

   for (const town of towns) {
      if (town.textContent.includes(input)) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         counter++;
      }
   }
   result.textContent = `${counter} matches found`;

}
