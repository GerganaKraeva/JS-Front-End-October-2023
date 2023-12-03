function extractText() {
    const selectedItems=document.getElementsByTagName(`li`);
    const result = [];
    for (const item of Array.from(selectedItems))  {
        result.push(item.textContent); 
    }
    const textArea = document.getElementById('result');
    textArea.textContent=result.join("\n");
  
}