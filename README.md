Authentication API
This is a Node.js API for user authentication using JWT (JSON Web Tokens), following the MVC (Model-View-Controller) pattern. The API implements user registration, login, and token-based authentication.

Features Implemented:
Authentication with JWT Token: Users can register, login, and authenticate using JWT tokens.

MVC Pattern:

Models: User model schema defines the structure of user data.
Middleware: Auth middleware verifies JWT tokens for protected routes.
Controllers: Separate controllers handle registration, login, and profile management logic.
Routes: Routes are organized in separate files for better readability and maintainability.
Helper Functions:

Helper folder contains functions for hashing and comparing passwords securely.
.
├── controllers          # Controller logic for registration, login, and profile management
├── helpers              # Helper functions for password hashing and comparison
├── middleware           # Middleware for JWT token verification
├── models               # User model schema
├── routes               # API routes for registration, login, and profile management
├── .env                 # Environment variables (not included in repository)
├── index.js             # Entry point for the application
└── README.md            # Project README file

- Use API endpoints:

Register a new user: POST /api/v1/user/register
Login with existing user: POST /api/v1/user/login
update profile:  PUT /api/v1/user/update-userprofile/:id
delete profile:  Delete /api/v1/usrr/delete-userprofile/:id

Requirements:
Node.js
MongoDB
Libraries Used:
Express.js
Mongoose
Bcrypt.js
JSONWebToken
Access protected routes: Include JWT token in the Authorization header.
