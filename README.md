# lost-blog

A modern blog web application built using the MERN stack, providing a seamless and user-friendly experience for creating, reading, and managing blog posts. It includes features like JWT-based authentication, image hosting with Cloudinary, and automatic blog post summarization using Google's Gemini API.

## Essential Features (Todo List)

### Authentication & User Management
- [x] **User Registration**: Allow users to register an account
- [x] **User Login**: Enable users to log in using JWT tokens
- [x] **JWT-based Authentication**: Implement access/refresh token mechanisms for secure user sessions
- [x] **Logout**: Allow users to log out and destroy their session
- [x] **Refresh Token Endpoint**: Provide a way to refresh tokens
- [ ] **Profile Page**: Allow users to manage their profile information and view their posts

### Blog Posts
- [x] **Create Blog Post**: Users can create a blog post with rich text content using Tiptap editor
- [ ] **Edit Blog Post**: Enable users to edit their blog posts
- [ ] **Delete Blog Post**: Allow users to delete their blog posts
- [x] **Image Upload**: Users can upload and manage images via Cloudinary
- [x] **Blog Post Summarization**: Automatically generate a summary using Gemini API
- [x] **Get Blog Post by ID**: Fetch individual posts by their unique ID
- [x] **Top Rated Blog Posts**: Retrieve the top-rated posts based on user ratings

### Blog Post Interaction
- [ ] **Comments Section**: Enable users to comment on blog posts
- [ ] **Like & Dislike Posts**: Implement like and dislike functionality for posts
- [ ] **Share Blog Posts**: Provide a way to share blog posts via social media

### Blog Categories & Search
- [x] **Get Blog Categories**: Retrieve a list of all blog categories
- [ ] **Search Blog Posts**: Implement a search feature to find posts by title, content, or author
- [ ] **Filter by Categories**: Allow users to filter posts by category

### User Dashboard
- [ ] **User's Posts List**: Display a list of posts created by the logged-in user
- [ ] **Drafts Management**: Allow users to save and manage draft posts
- [ ] **Post Analytics**: Provide analytics on views, likes, and comments for each post

### Notifications & UI
- [x] **Real-time Notifications**: Use react-hot-toast for toast notifications (e.g., post published, errors)
- [ ] **Email Notifications**: Notify users about new posts or comments via email
- [x] **Particle Animations**: Enhance UI with tsparticle animations
- [x] **Responsive Design**: Ensure the app is mobile and tablet-friendly

### Backend Enhancements
- [x] **RESTful API**: Implement endpoints for managing users, posts, categories, and media
- [x] **Error Handling**: Use ApiError for consistent error responses
- [x] **Data Validation**: Validate user inputs and data at the server level
- [ ] **Rate Limiting**: Protect endpoints from abuse using rate-limiting mechanisms


## Features

- **User Authentication & Authorization**: JWT using refresh/access token mechanism
- **RESTful API**: Managing users, blog posts, and media
- **Cloudinary Integration**: Image uploads and management
- **Rich Text Editor**: Tiptap for creating and editing blog posts
- **Automatic Blog Summarization**: Gemini API for generating concise post summaries
- **Interactive UI**: Built with Shadcn/ui and Tailwind CSS
- **Notifications**: React Hot Toast for real-time alerts
- **Visual Animations**: tsparticle for beautiful particle animations
- **MERN Stack**: Full stack built with MongoDB, Express, React, and Node.js

## Tech Stack

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express**: Web framework for Node.js
- **Mongoose**: ODM for MongoDB
- **jwt (jsonwebtoken)**: Authentication and authorization
- **bcrypt**: Password hashing
- **MongoDB**: Database for storing user data and blog posts
- **Cloudinary**: Image hosting and management
- **Gemini API**: Blog post summarization

### Frontend
- **React.js**: Frontend framework for building UI components
- **Shadcn/ui**: UI components for a sleek, modern interface
- **TailwindCSS**: Utility-first CSS framework for styling
- **Axios**: HTTP client for API calls
- **tsparticle**: Particle effects for a visually engaging UI
- **react-hot-toast**: Toast notifications for alerts
- **Tiptap**: A rich-text editor for creating blog posts

## Backend Endpoints

### Authentication
- `POST /register`: Register a new user
- `POST /login`: Login user and issue JWT
- `GET /getUser`: Retrieve user data (protected by JWT)
- `POST /logout`: Logout a user (protected by JWT)
- `POST /refresh-token`: Refresh the access token

### Blog Posts & Categories
- `GET /get-post/:id`: Get a blog post by its ID (protected by JWT)
- `GET /get-all-posts`: Retrieve all blog posts (protected by JWT)
- `GET /getTopRatedPosts`: Retrieve the top-rated blog posts (protected by JWT)
- `GET /get-categories`: Retrieve the list of blog categories (protected by JWT)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Cloudinary Account](https://cloudinary.com/)
- [Gemini API KEY](https://ai.google.dev/gemini-api/docs)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Vidhu-dev/lost-blog.git
   cd lost-blog
   ```
2. Navigate to the server folder
   ```bash
   cd server
   ```
3. Install the dependencies
   ```bash
   yarn install
   ```
4. Set up environment variables: Create a .env file in the backend directory with the following values:
   ```
    MONGODB_URI =
    PORT =
    CORS_ORIGIN = 
    ACCESS_TOKEN_EXPIRY =
    ACCESS_TOKEN_AGE = 
    ACCESS_TOKEN_SECRET = 
    REFRESH_TOKEN_EXPIRY = 
    REFRESH_TOKEN_AGE = 
    REFRESH_TOKEN_SECRET = 
    CLOUDINARY_CLOUD_NAME = 
    CLOUDINARY_API_KEY = 
    CLOUDINARY_API_SECRET = 
    GEMINI_API_KEY  = 
   ```
5. Run the backend server:
    ```bash
   nodemon
   ```
6. Navigate to the client folder
   ```bash
   cd client
   ```
7. Install the dependencies
   ```bash
   yarn install
   ```
8. Run the frontend server:
    ```bash
   yarn run dev
   ```
