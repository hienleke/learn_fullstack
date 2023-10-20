import json
from decimal import Decimal
import os
import django

# Set the Django settings module for the project
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "products.settings")  # Replace "your_project" with your actual project name

# Configure the Django environment
django.setup()

from products.models import Product  # Replace "your_app" with your app name

def load_data():
    with open('products.json', 'r') as json_file:
        products_data = json.load(json_file)

    for product_data in products_data:
        product = Product.objects.create(
            name=product_data['name'],
            description=product_data['description'],
            price=Decimal(product_data['price'])
        )
        print(f"Product '{product.name}' created.")

if __name__ == '__main__':
    load_data()
