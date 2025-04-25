import http.server
import socketserver
import os
import webbrowser
from urllib.parse import urlparse, unquote

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Parse the URL
        parsed_url = urlparse(self.path)
        path = unquote(parsed_url.path)
        
        # If root path, serve index.html
        if path == '/':
            self.path = '/index.html'
        
        # Handle 404 errors
        if not os.path.exists(self.translate_path(self.path)):
            self.send_error(404, "File not found")
            return
            
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

def run_server(port=8000):
    # Create the server
    handler = CustomHandler
    httpd = socketserver.TCPServer(("", port), handler)
    
    # Print server information
    print(f"Server started at http://localhost:{port}")
    print("Press Ctrl+C to stop the server")
    
    # Open browser automatically
    webbrowser.open(f'http://localhost:{port}')
    
    try:
        # Start the server
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")
        httpd.server_close()

if __name__ == "__main__":
    run_server() 