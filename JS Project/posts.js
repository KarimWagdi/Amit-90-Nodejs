const obj = fetch("https://dummyjson.com/posts")
.then(response => response.json())
.then(data =>{
    let posts = []
    data.posts.forEach(element => {
    if(element.views > 100){
        posts.push(element)
    }
})
return posts
}).then(movie => console.log(movie))

// .then(dataS => dataS.posts.forEach(element => {
//     console.log(element);
//     const singlePost = document.createElement("div")
//     singlePost.innerHTML = `
//        <div class="card mt-5">
//         <div class="card-header bg-dark  ">
//             ${element.tags.map(tag => `<button type="button" class="btn btn-secondary">${tag}</button>`)}
//         </div>
//         <div class="card-body">
//             <h5 class="card-title">${element.title}</h5>
//             <p class="card-text">${element.body}</p>
//             <div class="d-flex justify-content-between">
//             <div>
//             <a class="btn btn-secondary" href='./post.html' onclick="openPost(${element.id})">Open Post</a>
//             </div>
//             <div class="btn-group " role="group" aria-label="Basic example">
//             <button type="button" class="btn btn-secondary">${element.reactions.likes}</button>
//             <button type="button" class="btn btn-secondary">${element.reactions.dislikes}</button>
//             <button type="button" class="btn btn-secondary">${element.views}</button>
//             </div>
//             </div>
//         </div>
//         </div>
//     `
//     document.getElementById("ActionPosts")?.appendChild(singlePost);
// }))


