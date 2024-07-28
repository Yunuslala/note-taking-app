# Note-taking Application

This project is a daily note-taking application built with Node.js and React.js, featuring a responsive and intuitive UI using Tailwind CSS. The system includes functionalities such as creating, editing, deleting notes

## Deployed Frontend URL

- **URL**: 'note-taking-frontend.vercel.app/'

## Features
- **User Dashboard**: View, create, edit, and delete notes.
- **Authentication**: User registration and login.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB or Firebase (as an option)
- **Authentication**: JWT (JSON Web Tokens)

## Installation

### Prerequisites

- Node.js and npm/yarn
- MongoDB or Firebase

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/Yunuslala/note-taking-app
    cd note-taking-app
    ```

2. Install backend dependencies:

    ```bash
    cd backend
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```makefile
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    PORT=your_port
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Install frontend dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

2. Start the frontend development server:

    ```bash
    npm start
    ```

## User Login

1. Open the frontend application in your browser.
2. Register or login using the credentials provided.
3. View, create, edit, and delete notes.

## API Endpoints

### Authentication

- **POST** `/api/auth/login` - Login for users.
- **POST** `/api/auth/register` - Registration for users.

### Note Routes

- **GET** `/api/notes` - Get all notes for the logged-in user.
- **POST** `/api/notes` - Create a new note.
- **PATCH** `/api/notes/:id` - Update an existing note.
- **DELETE** `/api/notes/:id` - Delete a note.
- **GET** `/api/notes/:id` - Get A Individual Note.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

### Directory Structure

```perl
note-taking-app/
├── backend/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── index.js
│   └── ...
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.js
    │   └── ...
    ├── public/
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
