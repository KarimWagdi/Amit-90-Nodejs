// const postsContainer = document.getElementById("posts");

// const data = fetch("https://jsonplaceholder.typicode.com/posts")
//    .then(response => response.json())
//    .then(data => data.map(post => {
//         const postElement = document.createElement("div");
//         postElement.classList.add("post"); //just for style
//         postElement.innerHTML = `
//             <h3>${post.title}</h3>
//             <p>${post.body}</p>
//         `;
//         postsContainer.appendChild(postElement);
//    })); 
//  const Name = "wagdi"
//  const data = fetch("https://fakestoreapi.com/products")
//    .then(response => response.json())
//    .then(data => data.map(product => {
//         const productElement = document.createElement("div");
//         productElement.classList.add("post"); //just for style
//         productElement.innerHTML = `
//                 <div class="card">
//                     <img src=${product.image} class="card-img-top" alt="...">
//                     <div class="card-body">
//                     <h5 class="card-title">${product.title}</h5>
//                     <p class="card-text">${product.description}</p>
//                     </div>
//                     <div class="card-footer">
//                     <small class="text-body-secondary">${product.category}</small>
//                     </div>
//                 </div>
//         `;
//         document.getElementById("posts").appendChild(productElement);
//    })); 
//  export default Name