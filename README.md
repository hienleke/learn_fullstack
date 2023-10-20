# lekehien_homebase_Back-end


# Project Name

django_server : CRUD_product sqlite and call api get user through proxy python script.
proxy_python : proxy script.
express_servser : CRUD_user sqlite

## Project Structure Over view

root_project/
├── django_server/
│ ├── myproject/
│ ├── product/
├── express_server/
├── python_proxy/
│ ├── proxy_script.py

## Installation and Usage

To run the project, follow these steps:

**1. Start `express_server` (Express.js Server):**

npm install
npm run dev

express server will run on port 3000

**2. Start proxy script:**
cd python_proxy
python proxy_script.py

Proxy server will run on port 5000

**3.Start django_server (Django Server):**

pip install -r requirements.txt

python manage.py runserver

django server will run on port 8000


