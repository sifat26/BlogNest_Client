BlogNest
========

Live site: <https://blognest-d41ff.web.app/>

Overview
--------

BlogNest is a modern and dynamic blogging platform designed to provide a seamless and engaging user experience. Built using React and Firebase, BlogNest allows users to create, share, and discover high-quality blog content with ease. The platform supports user authentication, personalized wishlists, and comprehensive blog management.

Features
--------

### Responsive Home Page

-   Header: Includes a simple navbar with links to Home, Add Blog, All Blogs, Featured Blogs, and Wishlist. It also conditionally displays login/register buttons or the user's profile picture and a logout button based on the authentication status.
-   Banner (Hero Section): Highlights the platform with an attractive banner to capture the visitor's attention.
-   Recent Blog Posts: Displays the six most recent blogs with the following details:
    -   Title
    -   Image
    -   Short description
    -   Category
    -   Details button
    -   Wishlist button
-   Newsletter Section: Allows users to subscribe to the newsletter. Upon submission, a toast message is displayed (e.g., "Thank you for subscribing to our newsletter").
-   Additional Unique Sections: Two extra sections to enhance the website's uniqueness and relevance. These sections can be used to highlight featured content, testimonials, or other engaging elements.

### Authentication

-   Email and Password-based Authentication: Users can register and log in using their email and password.
-   Additional Login Options: Integration with Google for an alternative login method.
-   Registration Page: Includes validation for password strength (minimum 6 characters, a capital letter, a special character, and a numeric character).
-   Conditional Rendering: Login/register buttons are displayed for unauthenticated users, while authenticated users see their profile picture and a logout button.

### All Blogs Page

-   Display All Blogs: Shows all blogs added by any user.
-   Filtering Options: Users can filter blogs by category.
-   Search Field: Allows users to search blogs by title using MongoDB text search.
-   Blog Details: Each blog entry includes a title, image, short description, category, details button, and wishlist button.
-   Wishlist Functionality: Users can add blogs to their wishlist.

### Blog Details Page

-   Detailed Blog Information: Includes the title, image, short description, and long description of the blog.
-   Comments Section: Users can comment on blogs (except their own). Comments display the owner's name and profile picture.
-   Conditional Commenting: Prevents users from commenting on their own blogs and displays an appropriate message.
-   Update Button: Blog owners see an update button to edit their blogs, leading to an update route.

### Add Blog Page

-   Blog Submission Form: A form to submit new blogs, including fields for title, image URL, category (dropdown), short description, and long description.

### Update Blog Page

-   Edit Existing Blogs: Allows logged-in users to edit their blogs with pre-filled form information for convenience.
-   Protected Route: Ensures only blog owners can access this page.

### Featured Blogs Page

-   Top Posts Table: Displays the top 10 posts based on the word count of the long description.
-   Table Details: Includes serial number, blog title, blog owner, and blog owner's profile picture.

### Wishlist Page

-   Wishlist Display: Shows all blogs wishlisted by the user with options to view details and remove from the wishlist.

### Error Handling and 404 Page

-   Authentication Errors: Displays user-friendly error messages on authentication failure.
-   404 Page: Custom 404 page for handling non-existent routes.

Design
------

### Front-End

-   React: Utilized for building the user interface.
-   React Router: For handling routing within the application.
-   Material-UI/Bootstrap: Used for styling components and ensuring a responsive design.

### Back-End

-   Firebase Authentication: Manages user authentication.
-   Firebase Firestore: Database for storing blogs, comments, and user information.
-   Firebase Functions: For server-side logic and operations.

### Deployment

-   Firebase Hosting: The application is deployed on Firebase Hosting for reliable and fast delivery.