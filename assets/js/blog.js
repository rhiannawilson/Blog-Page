
// const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

// const blogContent = JSON.parse(localStorage.getItem('posts'));

// if (blogContent) {
//     const blogDisplay = document.getElementById('.blogContent');
//     blogDisplay.innerHTML = `
//         <p><strong>Username:</strong> ${blogContent.username}</p>
//         <p><strong>Blog Title:</strong> ${blogContent.blogTitle}</p>
//         <p><strong>Content:</strong> ${blogContent.content}</p>
//     `;
// } else {
//     console.log('formData not found');
// }



// document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('DOMContentLoaded', function () {
        const postsContainer = document.getElementById('postList');

    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (posts.length > 0) {
        posts.forEach(function(post) {
            const postElement = document.createElement('div');
            postElement.classList.add('post-container');

            postElement.innerHTML = `
                <h3>${post.blogTitle}</h3>
                <p>${post.content}</p>
                <span>Posted by: ${post.username}</span>
            `;

            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = 'No blog posts to display.';
    };

    });























// // Retrieve for data from local Storage 
// // let blogForm = JSON.parse(localStorage.getItem('blogForm'));
// const form = document.getElementById('blogForm');

// //  Check if form data exists in localStorage
//  if (form) {
//      form.innerHTML = `
//         <p><strong>Username:</strong> ${form.username}</p>
//         <p><strong>Blog Title:</strong> ${form.blogTitle}</p>
//         <p><strong>Content:</strong> ${form.content}</p>
//    `;
//  } else {
// console.log('formData not found')
//  }



