CRM Backend System
This project is a backend system for a basic Customer Relationship Management (CRM) application. The system manages customer data, including contacts, companies, and interactions. The primary aim is to create a scalable, secure, and well-documented API that can handle CRUD operations, user authentication, and data validations.

Table of Contents
Project Overview

Installation

Configuration

Running the Application

API Endpoints

Testing with Postman

Deployment

Development Workflow

Directory Structure

Technologies Used

Troubleshooting

License

Acknowledgements

Project Overview
The CRM backend system is designed to manage customer data efficiently. It provides features such as user authentication, customer CRUD operations, and secure data management. The system uses Node.js, Express, and MongoDB, and is designed to be deployed on platforms like Render.

Installation
Prerequisites
Ensure you have the following installed:

Node.js

npm (Node Package Manager) or yarn

MongoDB (for local development)

Steps
Clone the repository:

bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
Install the dependencies:

bash
npm install
Configuration
Create a .env file in the root directory and add the following environment variables:

plaintext
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=supersecretkey
PORT=3000
Running the Application
Start the MongoDB server (if using local MongoDB):

bash
mongod
Start the Node.jsserver:

bash
npm start
The server will start on the port specified in the .env file (default is 3000).

API Endpoints
Authentication
Register a User

Endpoint: POST /api/auth/register

Request Body:

json
{
    "username": "testuser",
    "password": "testpassword",
    "role": "user"
}
Login a User

Endpoint: POST /api/auth/login

Request Body:

json
{
    "username": "testuser",
    "password": "testpassword"
}
Customers
Create a Customer

Endpoint: POST /api/customers

Request Body:

json
{
    "name": "Customer Name",
    "email": "customer@example.com",
    "phone": "1234567890",
    "company": "Customer Company"
}
Get All Customers

Endpoint: GET /api/customers

Get a Customer by ID

Endpoint: GET /api/customers/:id

Update a Customer

Endpoint: PUT /api/customers/:id

Request Body:

json
{
    "name": "Updated Customer Name",
    "email": "updated@example.com",
    "phone": "0987654321",
    "company": "Updated Company"
}
Delete a Customer

Endpoint: DELETE /api/customers/:id

Testing with Postman
Setup
Download and install Postman (https://www.postman.com/).

Import the collection provided in the repository (if available) or create new requests as described below.

Steps
Register a User

Endpoint: POST /api/auth/register

URL: http://localhost:3000/api/auth/register

Request Body (JSON):

json
{
    "username": "testuser",
    "password": "testpassword",
    "role": "user"
}
Steps:

Open Postman and create a new POST request.

Enter the URL: http://localhost:3000/api/auth/register.

Go to the Body tab, select raw, and choose JSON from the dropdown menu.

Paste the JSON body into the editor.

Click Send.

Login a User

Endpoint: POST /api/auth/login

URL: http://localhost:3000/api/auth/login

Request Body (JSON):

json
{
    "username": "testuser",
    "password": "testpassword"
}
Steps:

Create a new POST request.

Enter the URL: http://localhost:3000/api/auth/login.

Go to the Body tab, select raw, and choose JSON from the dropdown menu.

Paste the JSON body into the editor.

Click Send.

The response will include a JWT token. Copy this token for use in the next steps.

Create a Customer

Endpoint: POST /api/customers

URL: http://localhost:3000/api/customers

Request Body (JSON):

json
{
    "name": "Customer Name",
    "email": "customer@example.com",
    "phone": "1234567890",
    "company": "Customer Company"
}
Headers:

plaintext
Authorization: Bearer <your_jwt_token>
Steps:

Create a new POST request.

Enter the URL: http://localhost:3000/api/customers.

Go to the Body tab, select raw, and choose JSON from the dropdown menu.

Paste the JSON body into the editor.

Go to the Headers tab, add a key Authorization with value Bearer <your_jwt_token> (replace <your_jwt_token> with the token from the login step).

Click Send.

Get All Customers

Endpoint: GET /api/customers

URL: http://localhost:3000/api/customers

Headers:

plaintext
Authorization: Bearer <your_jwt_token>
Steps:

Create a new GET request.

Enter the URL: http://localhost:3000/api/customers.

Go to the Headers tab, add a key Authorization with value Bearer <your_jwt_token>.

Click Send.

Get a Customer by ID

Endpoint: GET /api/customers/:id

URL: http://localhost:3000/api/customers/<customer_id>

Headers:

plaintext
Authorization: Bearer <your_jwt_token>
Steps:

Create a new GET request.

Enter the URL: http://localhost:3000/api/customers/<customer_id> (replace <customer_id> with the ID of the customer you want to retrieve).

Go to the Headers tab, add a key Authorization with value Bearer <your_jwt_token>.

Click Send.

Update a Customer

Endpoint: PUT /api/customers/:id

URL: http://localhost:3000/api/customers/<customer_id>

Request Body (JSON):

json
{
    "name": "Updated Customer Name",
    "email": "updated@example.com",
    "phone": "0987654321",
    "company": "Updated Company"
}
Headers:

plaintext
Authorization: Bearer <your_jwt_token>
Steps:

Create a new PUT request.

Enter the URL: http://localhost:3000/api/customers/<customer_id> (replace <customer_id> with the ID of the customer you want to update).

Go to the Body tab, select raw, and choose JSON from the dropdown menu.

Paste the JSON body into the editor.

Go to the Headers tab, add a key Authorization with value Bearer <your_jwt_token>.

Click Send.

Delete a Customer

Endpoint: DELETE /api/customers/:id

URL: http://localhost:3000/api/customers/<customer_id>

Headers:

plaintext
Authorization: Bearer <your_jwt_token>
Steps:

Create a new DELETE request.

Enter the URL: http://localhost:3000/api/customers/<customer_id> (replace <customer_id> with the ID of the customer you want to delete).

Go to the Headers tab, add a key Authorization with value Bearer <your_jwt_token>.

Click Send.

You should receive a response with a JSON message confirming the deletion:

json
{
    "message": "Customer deleted successfully"
}
Deployment
Using MongoDB Atlas
Set Up MongoDB Atlas

Go to the MongoDB Atlas website and create an account if you haven't already.

Create a new project and a new cluster in MongoDB Atlas.

Whitelist your IP address to allow connections from your local development environment.

Create a database user with the necessary permissions.

Get the MongoDB Connection String

In MongoDB Atlas, go to the cluster you created.

Click on the "Connect" button.

Choose "Connect your application".

Copy the provided connection string. It will look something like this:

mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Replace <username>, <password>, and <dbname> with your actual database user credentials and database name.

Update the .env File

Replace the MONGO_URI value in your .env file with the MongoDB Atlas connection string.

Your .env file should look like this:

plaintext
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
JWT_SECRET=supersecretkey
PORT=3000
Deploying to Render
Create a New Render Service

Go to the Render website and log in or create an account.

Create a new web service.

Connect your GitHub repository containing the CRM backend code.

Add Environment Variables in Render Dashboard

During the setup, add the environment variables from your .env file in the Render dashboard (MONGO_URI, JWT_SECRET, and PORT).

Configure Build and Start Commands

In the Render Dashboard, configure the build and start commands:

Build Command: npm install

Start Command: node server.js

Deploy

Save the changes and deploy your application.

Render will automatically build and deploy your application.

Once deployed, Render will provide a URL where your application is hosted.

Development Workflow
Setting Up Git
Initialize a Git repository if it is not already initialized:

bash
git init
Add remote repository:

bash
git remote add origin https://github.com/yourusername/your-repo-name.git
Committing and Pushing Changes
Stage your changes:

bash
git add .
Commit your changes:

bash
git commit -m "Your commit message"
Push your changes to the remote repository:

bash
git push origin main
Directory Structure
Here is an overview of the directory structure of the project:

project-root
│   .env
│   .gitignore
│   package.json
│   README.md
│
├───config
│       database.js
│
├───controllers
│       authController.js
│       customerController.js
│
├───middlewares
│       authMiddleware.js
│
├───models
│       User.js
│       Customer.js
│
├───routes
│       authRoutes.js
│       customerRoutes.js
│
└───services
        customerService.js
Technologies Used
Node.js: JavaScript runtime for building the backend server.

Express.js: Web framework for building the API endpoints.

MongoDB: NoSQL database for storing customer data.

Mongoose: ODM for MongoDB to interact with the database.

JWT: JSON Web Tokens for user authentication.

bcrypt: Library for hashing passwords.

dotenv: Module to load environment variables from a .env file.

express-validator: Middleware for validating incoming request data.

Troubleshooting
Common Issues
MongoDB Connection Issues

Ensure that your MongoDB URI in the .env file is correct.

Make sure your IP address is whitelisted in MongoDB Atlas.

Environment Variables Not Set

Double-check that your environment variables are correctly set in the Render dashboard.

Server Not Starting

Ensure that you are running the correct start command: node server.js.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
This project is a part of the Wisdom Peak Analytics Backend Assignment.

Built with Node.js, Express, MongoDB, and various other npm packages.
