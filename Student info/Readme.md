Step 1: Set Up Node.js Project
Create a new directory & navigate into it:
mkdir student-info-api
cd student-info-api

Step 2: Javascript code
const http = require('http');
const url = require('url');

// student data
const students = {
    '11111': { id: '11111', name: 'Bruce Lee', score: 84 },
    '22222': { id: '22222', name: 'Jackie Chen', score: 93 },
    '33333': { id: '33333', name: 'Jet Li', score: 88 },
};

// Create server
const server = http.createServer((req, res) => {
    // Parse the URL
    const parsedUrl = url.parse(req.url, true);
    
 // Checking path matches the API endpoint
   if (parsedUrl.pathname === '/api/score') {
   const studentId = parsedUrl.query.student_id || parsedUrl.query.studnt_id; // Allow both query params

   if (students[studentId]) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(students[studentId]));
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Student not found' }));
        }
    } else {
        // Handle 404 for other routes
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Not Found' }));
    }
});

// Run the server
const port = 8000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

Step 3: Run the Server
In your terminal, run the following command: node studentinfo.js
You should see the message:
Server running at http://localhost:8000
 

Step 4: Test the Server in browser
•	For Bruce Lee:
http://localhost:8000/api/score?student_id=11111
 

•	For Jackie Chen:
http://localhost:8000/api/score?studnt_id=22222
 

If you try an ID that does not exist, you will receive a 404 error with the message:
 
Link for the Google Slides: https://docs.google.com/presentation/d/1XSYM6jbL4r6Mdlr3L10ybg0xrcKHhJkWdhS6zf8Zwe8/edit?usp=sharing


