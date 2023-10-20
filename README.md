# lekehien_homebase_Back-end


# Project Name

django_server : CRUD_product sqlite and call api get user through proxy python script.
proxy_python : proxy script.
express_servser : CRUD_user sqlite

## Project Structure Over view
```
root_project/
├── django_server/
│ ├── myproject/
│ ├── product/
├── express_server/
| ├── config/
│ ├── controllers/
│ ├── model/
│ ├── router/
| ├── app.js
├── python_proxy/
│ ├── proxy_script.py
```

## Installation and Usage

To run the project, follow these steps:

**1. Start `express_server` (Express.js Server):**
```
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

**2. Start proxy script:**
```
cd python_proxy
python proxy_script.py
```
Proxy server will run on port 5000

**3.Start django_server (Django Server):**
```
pip install -r requirements.txt

python manage.py createsuperuser

python manage.py makemigrations

python manage.py migrate

python manage.py runserver

```

Login with username password that you created 

```
http://localhost:8000/admin 

```
call this to get all user data from express server
``
 http://localhost:8000/get_user_data/    

```



django server will run on port 8000


