window.addEventListener("load", solve);

function solve() {
    const taskTitleInput = document.getElementById('task-title');
    const taskCategoryInput = document.getElementById('task-category');
    const taskContentInput = document.getElementById('task-content');
    const publishBtn = document.getElementById('publish-btn');

    const formElement = document.querySelector('form');
    publishBtn.addEventListener('click', publish);

    function publish() {
        let isValidInput= taskCategoryInput.value==='' || taskTitleInput.value===''
        || taskContentInput.value==='';

        if(isValidInput) {
            return;
        }

        const reviewField = document.getElementById('review-list');
        const uploadTaskField = document.getElementById('published-list');
        
        const li=document.createElement('li');
        li.classList.add('rpost');

        const article = document.createElement('article');

        const h4 = document.createElement('h4');
        h4.textContent = taskTitleInput.value;
        const titleVal=taskTitleInput.value;

        const paragraphCategory = document.createElement('p');
        paragraphCategory.textContent = `Category: ${taskCategoryInput.value}`;
        const categoryVal=taskCategoryInput.value;

        const paragraphContent = document.createElement('p');
        paragraphContent.textContent =`Content: ${taskContentInput.value}`;
        const contentVal = taskContentInput.value;


        article.appendChild(h4);
        article.appendChild(paragraphCategory);
        article.appendChild(paragraphContent);

        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', edit);

        const postBtn = document.createElement('button');
        postBtn.classList.add('action-btn');
        postBtn.classList.add('post');
        postBtn.textContent = 'Post';
        postBtn.addEventListener('click', post);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(postBtn);

        reviewField.appendChild(li);
        publishBtn.disable = true;
        formElement.reset();

        function edit() {
            taskTitleInput.value = titleVal;
            taskCategoryInput.value = categoryVal;
            taskContentInput.value = contentVal;

            reviewField.removeChild(li);
            publishBtn.disable = false;
        }

        function post() {
            reviewField.remove(li);
            li.removeChild(editBtn);
            li.removeChild(postBtn);
            uploadTaskField.appendChild(li);
            publishBtn.disable = false;
        }
    }
}
