Step 1: Install Node.js in Ubuntu:

Step 2: Created New js file in the directory:
  touch Jason-api-time-server.js

Code Explanation:
1.	Modules Required:
o	We import the http module to create an HTTP server.
o	We use the url module to parse the incoming request URLs.

2.	Creating the Server:
o	We create an HTTP server using http.createServer(). Inside the callback, we handle incoming requests.

3.	Parsing the Request:
o	The req.url is parsed using new URL(), which gives us an easy way to access the path and query parameters.
o	We check if the path matches /api/parsetime or /api/unixtime and extract the iso parameter.

4.	Handling the Endpoints:
o	For /api/parsetime, we create a response object containing the hour, minute, and second extracted from the date.
o	For /api/unixtime, we return the UNIX timestamp in milliseconds.
o	If the path is invalid or the iso parameter is missing, we respond with a 404 error.

5.	Response Headers:
o	We set the Content-Type header to application/json for JSON responses.
o	We end the response with JSON.stringify() to convert our response object into a JSON string.

6.	Listening on the Specified Port:
o	The server listens on the port specified in the command line argument.

Step 3: Run json-api-time-server.js file and specify the port:

Step 4: Testing the Endpoints: http://localhost:8000/api/currenttime

Google Slide Link: https://docs.google.com/presentation/d/1oRGb5vexvto3W3PmegxEvyLHi7Oyl6VWdqjq2iHIKvk/edit?usp=sharing


