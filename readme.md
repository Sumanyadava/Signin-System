# SigninSystem

A signin system so user can manage their accound 

## Demo

link to demo -

## Run Locally

### Run Client

1. Clone the project:

   ```bash
   git clone https://github.com/Sumanyadava/develops.git
   ```

2. Navigate to the project :

   ```bash
   cd signinsystem
   ```

3. Navigate to the client directory:

   ```bash
   cd client
   ```

4. Install dependencies:

   ```bash
   npm install
   ```
4.1 Rename .env.sample file to .env 
5. Start the client:

   ```bash
   npm run dev
   ```

### Run Server

1. Open another terminal window and navigate to the project directory:

   ```bash
   cd signinstsystem
   ```

2. Navigate to the server directory:

   ```bash
   cd server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```
3.1 Rename .env.sample file to .env 


4. Start the server:

   ```bash
   npm run start
   ```

5. If you encounter any issues, install nodemon:

   ```bash
   npm i -D nodemon
   ```

6. Run the server in development mode:

   ```bash
   npm run dev
   ```



## API Reference

#### Siginin

```http
  GET /api/auth/signin
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Login in

```http
  GET /api/auth/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `api_key` | `string` | **Required**. Your API key        |



#### Update User

```http
  GET /api/auth/update
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id`      | `string` | **Required**. User ID      |




## Support

For support, email - ansum2411@gmail.com


## Features

- Login and signin system

  -
  - user can create account
  - user can login
  - user can edit his account details 


## Tech Stack

**Client:** React, TailwindCSS , Daisy UI , react-toastify,cookie

**Server:** Node, Express , mongoose , bcryptjs , mongoose

**Database:** MongoDB

## Authors

- [@Sumanyadava](https://github.com/Sumanyadava)
