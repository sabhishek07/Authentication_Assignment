Authentication API
This is a Node.js API for user authentication using JWT (JSON Web Tokens), following the MVC (Model-View-Controller) pattern. The API implements user registration, login, and token-based authentication.

Features Implemented:
Authentication with JWT Token: Users can register, login, delete,update their profile using JWT tokens.

MVC Pattern:

![image](https://github.com/sabhishek07/Authentication_Assignment/assets/70909623/13cebd54-8959-48a3-a0b5-2253aea30838)

- Use API endpoints:

Register a new user:       POST /api/v1/user/register
Login with existing user:  POST /api/v1/user/login
update profile:            PUT /api/v1/user/update-userprofile/:id
delete profile:            Delete /api/v1/usrr/delete-userprofile/:id

Requirements:
Node.js
MongoDB
Libraries Used:
Express.js
Mongoose
Bcrypt.js
JSONWebToken
Access protected routes: Include JWT token in the Authorization header.
