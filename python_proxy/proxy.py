import http.server
import http.client

class ProxyHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        target_host = 'localhost'  # Replace with your API server's host
        target_port = 3000          # Replace with your API server's port

        # Build the target URL
        target_url = f'http://{target_host}:{target_port}{self.path}'

        # Forward the GET request to the target URL
        connection = http.client.HTTPConnection(target_host, target_port)
        connection.request("GET", target_url, headers=self.headers)

        # Get the response from the target server
        response = connection.getresponse()

        # Send the response back to the client
        self.send_response(response.status)
        for header in response.getheaders():
            self.send_header(header[0], header[1])
        self.end_headers()
        self.wfile.write(response.read())
        connection.close()

if __name__ == '__main__':
    server_address = ('', 5000)  # The proxy server listens on port 8000
    httpd = http.server.HTTPServer(server_address, ProxyHandler)
    print('Proxy server is running on port 5000')
    httpd.serve_forever()
