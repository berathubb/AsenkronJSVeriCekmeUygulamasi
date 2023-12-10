const postListDom = document.querySelector(".post-list");
const postUI = (posts) => {
    let result = "";
    posts.forEach((post) => {
        result += `
        <li class="post-item">
                <div class="post-body">
                    <span class="post-id">Post Id : <b>${post.id}</b></span>
                    <strong class="post-title">${post.title}</strong>
                    <p class="post-content">${post.body}</p>
                </div>
                <button class="post-button">Daha Fazla</button>
            </li>`;
            
        postListDom.innerHTML = result;
    });
}



const getData = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    postUI(data);
}
getData();