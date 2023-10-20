import requests
from django.http import JsonResponse

def get_user_data(request):
    proxy_url = 'http://localhost:5000/users'

    try:
        response = requests.get(proxy_url)
        user_data = response.json()  # Assuming the proxy returns JSON data

        return JsonResponse(user_data, safe=False)  # Set safe parameter to False
    except requests.exceptions.RequestException as e:
        error_message = {"error": str(e)}
        return JsonResponse(error_message, status=500)
