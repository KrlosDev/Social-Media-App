# Social Express

Social Express is a social media web application built using the MERN stack (MongoDB, Express.js, React, Node.js). This application allows users to create accounts, post updates, and interact with other users in a social network environment.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Contributing](#contributing)

## Features

- User authentication and authorization
- Create, read, update, and delete posts
- Follow and unfollow other users
- Real-time notifications and updates
- Responsive design for mobile and desktop

## Technologies Used

### Frontend

- React
- Redux Toolkit
- React Router
- Material UI
- Formik
- Yup
- React Dropzone

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- Bcrypt for password hashing
- Multer and GridFS for file uploads
- Helmet for security
- Morgan for logging

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB
### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/social-express.git
cd social-express
```
2. Install dependencies for both client and server:
```bash
cd client
npm install
cd ../server
npm install
```
### Running the Application
1. Create a .env file in the server directory and add the following environment variables:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```
2. Start the server:

```bash
cd server
npm start
```
3. Start the client:

```bash
cd client
npm start
```

### Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.
