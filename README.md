# learn_reactjs_js


# Project Name
```
express_servser : CRUD_user sqlite
```

## Project Structure Over view
```
root_project/
├── express_server/
| ├── config/
│ ├── controllers/
│ ├── model/
│ ├── router/
| ├── app.js
├── react-frontend/
```

## Installation and Usage

To run the project, follow these steps:

**1. Start `express_server` (Express.js Server):**
```
cd express_server
npm install
npm run dev
```

api test :

```
| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `http://localhost:3000/users`            | Retrieve all users.                      |
| `POST`   | `http://localhost:3000/users`            | Create a new users.                      |
| `PUT`    | `http://localhost:3000/users/{id}`       | Update by id.                            |
| `DELETE` | `http://localhost:3000/users/{id}`       | Delete by id.                            |
| `GET`    | `http://localhost:3000/users/{id}`       | Get detail.                              |
```

body create new user example
```
{
"username": "hienlk",
"email" : "lekehien5431@gmail.com"
}
```
express server will run on port 3000

