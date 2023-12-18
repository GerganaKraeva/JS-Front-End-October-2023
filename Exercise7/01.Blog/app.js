function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog/';

    const loadPostButton = document.getElementById('btnLoadPosts');
    const viewButton = document.getElementById('btnViewPost');
    const postsSelect = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const postComments = document.getElementById('post-comments');

    let allPosts = {};

    loadPostButton.addEventListener('click', async () =>{
        postsSelect.innerHTML = '';

        const response = await fetch(baseUrl + 'posts');
        allPosts =  await response.json();

        for (const [postId, postObj] of Object.entries(allPosts)) {
            const option = document.createElement('option');

            option.value = postId;
            option.textContent = postObj.title;
            postsSelect.appendChild(option);
 
        }
    });

    viewButton.addEventListener('click', async () => {
        postBody.innerHTML='';
        postComments.innerHTML='';
        
        
        const postId= postsSelect.value;
        postBody.textContent =  allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;

        const response = await fetch(baseUrl +'comments');
        const commentsInfo = await response.json();

        const filteredComments = Object.values(commentsInfo).filter(e =>e.postId === postId);
        filteredComments.forEach(comment => {
            const li = document.createElement('li');
            li.id=comment.id;
            li.textContent=comment.text;
            postComments.appendChild(li);
        });
        console.log(commentsInfo);
    });

}

attachEvents();