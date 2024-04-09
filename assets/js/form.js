document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const blogTitle = document.getElementById('blogTitle').value;
    const content = document.getElementById('content').value;

    if (!username || !blogTitle || !content) {
        alert("Please fill in all fields before submitting the form.");
        return;
    }

    const blogPost = { username, blogTitle, content };
    
    const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    posts.push(blogPost);

    localStorage.setItem('blogPosts', JSON.stringify(posts));

    // blogForm.reset();
    window.location.href ='blog.html';

});

























// const blogForm = document.getElementById('blogForm');

// blogForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const blogTitle = document.getElementById('blogTitle').value;
//     const content = document.getElementById('content').value;

//     if (!username || !blogTitle || !content) {
//         alert("Please fill in all fields before submitting the form.");
//         return;
//     }

//     const formObject = {
//         username: username,
//         blogTitle: blogTitle,
//         content: content
//     };

//     localStorage.setItem('formData', JSON.stringify(formObject));
//     console.log('Form data saved to localStorage:', formObject);

//     blogForm.reset();

// window.location.href = '/myPages/blog.html';
// });




// the const variable is being declared "form" and assigned a value.
// const blogForm = document.getElementById('blogForm');


// blogForm.addEventListener('submit' , function(event) {
//     event.preventDefault();
    
// formData: This is the variable name that will hold the FormData object created from the form data.
//     const formData = new FormData(blogForm);
//     const formObject = {};
//     formData.forEach((value, key) => {
//         formObject[key] = value;
// });
// localStorage.setItem('formData', JSON.stringify(formObject));

// console.log('Form data saved to localStorage:', formObject);

// clearing the form fields
// blogForm.reset();
// });

// save the form data to localStorage 
// const formData = {
//     username: document.getElementById('username').value,
//     blogTitle: document.getElementById('blogTitle').value,
//     content: document.getElementById('content').value,
// };

// localStorage.setItem('formData', JSON.stringify(formData));

// // redirect to the second webpage
// window.location.href ='my pages/blog.html';

// // Check if the current page is index.html before redirecting
// if (window.location.pathname.endsWith('index.html')) {
//     // Redirect to the second webpage
//    window.location.href = 'my pages/blog.html';
//  }

// function submitForm() {
//     const username = document.getElementById('username').value;
//     const blogTitle = document.getElementById('blogTitle').value;
//     const content = document.getElementById('content').value;

//     if (!username) {
//         alert("You forgot to write your name! Please try again. :)");
//         return;
//     }
//     if (!blogTitle) {
//         alert("You forgot to create a Blog Title! Please try again. :)");
//         return;
//     }

//     if (!content) {
//         alert("You forgot to add your blog content! Please try again :)");
//         return;
//     }

    // Continue with form submission logic if both username and blogTitle are provided
    // For example, you can submit the form data to a server or store it locally
// }

// Event listener to trigger form submission validation
// document.getElementById('blogForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent the form from submitting by default
//     submitForm(); // Call the function to validate the form submission
// });


