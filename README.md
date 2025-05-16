# Auth-Backend

This is a simple authentication backend built with Node.js, Express, Mongoose, and JWT.

# Hosted Version
You can find a hosted enpoint [here](https://express-auth-backend-3r61.onrender.com)

## Installation

1. Clone the repository: `git clone https://github.com/username/auth-backend.git`
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
	* `MONGO_URI`: The MongoDB connection string
	* `JWT_SECRET`: The secret key for generating JWTs
	* `PORT`: The port number to run the server on (optional, defaults to 5000)
4. Start the development server

   ```bash
   npm run dev
   ```

5. Or start the production build

   ```bash
   npm run build
   npm start
   ```


# Interacting with the app

### Postman
You can use the provided [postman collection and environments](https://github.com/Dark-haz/Express_auth_backend/releases/tag/v0.1.0) to interact with the app

### Swagger
Coming soon


# API Documentation 

### Register

Register a new user

* `POST /register`
* Body:

```json
{
  "username": "string",
  "password": "string"
}
```

* Response:

```json
{
  "statusCode": 200,
  "isSuccess": true,
  "errorMessages": [],
  "result": {
    "token": "string",
    "user": {
      "username": "string",
      "id": "string"
    }
  }
}
```

### Login

Login an existing user

* `POST /login`
* Body:

```json
{
  "username": "string",
  "password": "string"
}
```

* Response:

```json
{
  "statusCode": 200,
  "isSuccess": true,
  "errorMessages": [],
  "result": {
    "token": "string",
    "user": {
      "username": "string",
      "id": "string"
    }
  }
}
```

### Me

Get the current user info

* `GET /me`
* Headers:

```json
{
  "x-auth-token": "string"
}
```

* Response:

```json
{
  "statusCode": 200,
  "isSuccess": true,
  "errorMessages": [],
  "result": {
    "user": {
      "username": "string",
      "id": "string"
    }
  }
}
```

## /
* `GET /`
* Response:

```json
{
  "status": "OK",
  "message": "Server is running"
}
```

It’s a straightforward endpoint to verify the API is up and responding.



# Technologies
- `Validation` :  Zod
- `API` : Express , TS
- `Database` : MongoDB + Mongoose 
- `Authentication` : Express-JWT + JsonWebToken
- `ENV` : dotenv
- `Development Server` : nodemon
- `Type Checking` : TypeScript
- `Hosting` : Render + Atlas