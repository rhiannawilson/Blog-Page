# Blog Page 

A public blogging page for users to create their own blog posts

## Description

This is a two-page website where users can input and view blog posts. It includes building a content form, dynamically rendering blog posts, and implementing a light/dark mode toggle. 

### User Story

    AS A marketing student,
    I WANT a personal blog
    SO THAT I can showcase my thoughts and experiences.

### Acceptance Criteria

    GIVEN a personal blog
    WHEN I load the app,
    THEN I am presented with the landing page containing a form with labels and inputs for username, blog title, and blog content.
    WHEN I submit the form,
    THEN blog post data is stored to localStorage.
    WHEN the form submits,
    THEN I am redirected to the posts page.
    WHEN I enter try to submit a form without a username, title, or content,
    THEN I am presented with a message that prompts me to complete the form.
    WHEN I view the posts page,
    THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.
    WHEN I click the light mode/dark mode toggle,
    THEN the page content's styles update to reflect the selection.
    WHEN I click the "Back" button,
    THEN I am redirected back to the landing page where I can input more blog entries.
    WHEN I view the main content,
    THEN I am presented with a list of blog posts that are pulled from localStorage.
    WHEN I view localStorage,
    THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.
    WHEN I take a closer look at a single blog entry in the list,
    THEN I can see the title, the content, and the author of the post.
    WHEN I view the footer,
    THEN I am presented with a link to the developer's portfolio.

## File Structure

Blog-Page
├── assets
│   ├── css
│   │   ├── blog.css
│   │   ├── form.css
│   │   └── styles.css
│   └── js
│       ├── blog.js
│       ├── form.js
│       └── logic.js
├── myPages
│   ├── blog.html
├── index.html
└── LICENSE
└── README.md


## Usage
### Website Features
- HTML
- CSS
- JavaScript
- Form
- 2 Webpages 
- 1. Main page displaying the form
- 2. Blog page displaying the blog posts


### Technical Details
#### This website uses simple styling using CSS & HTML in 3 key ways
1. Background Colour ‘Whitesmoke’ - base colour
2. Font Style ‘Darkgrey’ - typography
3. Colours ‘Cadetblue’ - vision and design


## Credits
N/A

## License
Please refer to the LICENSE in the repo