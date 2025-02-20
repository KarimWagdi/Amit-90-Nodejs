// function openPost(id) {
//     const data = id
//     console.log(data);
//     const day = fetch(`https://dummyjson.com/posts/${id}`)
//     .then(response => response.json())
//     .then(element =>{
//         console.log(element);
//         const singlePost = document.createElement("div")
//         singlePost.innerHTML =`
//         <div class="card mt-5">
//         <div class="card-header bg-dark  ">
//             ${element.tags.map(tag => `<button type="button" class="btn btn-secondary">${tag}</button>`)}
//         </div>
//         <div class="card-body">
//             <h5 class="card-title">${element.title}</h5>
//             <p class="card-text">${element.body}</p>
//             <div class="d-flex justify-content-between">
//             <div>
//             <aclass="btn btn-secondary" >Open Post</aclass=>
//             </div>
//             <div class="btn-group " role="group" aria-label="Basic example">
//             <button type="button" class="btn btn-secondary">${element.reactions.likes}</button>
//             <button type="button" class="btn btn-secondary">${element.reactions.dislikes}</button>
//             <button type="button" class="btn btn-secondary">${element.views}</button>
//             </div>
//             </div>
//         </div>
//         </div>
//         `
//         return document.getElementById("postsData")?.appendChild(singlePost);
//     })
// }

const data = fetch("https://dummyjson.com/posts")
.then(res => res.json())
.then(data => data.posts.forEach(element => {
    const singlePost = document.createElement("div")
    singlePost.innerHTML = `
       <div class="card mt-5">
        <div class="card-header bg-dark  ">
            ${element.tags.map(tag => `<button type="button" class="btn btn-secondary">${tag}</button>`)}
        </div>
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.body}</p>
            <div class="d-flex justify-content-between">
            <div>
            <a class="btn btn-secondary" href='./post.html' onclick="openPost(${element.id})">Open Post</a>
            </div>
            <div class="btn-group " role="group" aria-label="Basic example">
            <button type="button" class="btn btn-secondary">${element.reactions.likes}</button>
            <button type="button" class="btn btn-secondary">${element.reactions.dislikes}</button>
            <button type="button" class="btn btn-secondary">${element.views}</button>
            </div>
            </div>
        </div>
        </div>
    `
    document.getElementById("posts")?.appendChild(singlePost);
}))


