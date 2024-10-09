# lost-blog

A modern blog web application built using the MERN stack, providing a seamless and user-friendly experience for creating, reading, and managing blog posts. It includes features like JWT-based authentication, image hosting with Cloudinary, and automatic blog post summarization using Google's Gemini API.

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
