const http = require('http');

// Sample student data
const students = {
    '11111': { id: '11111', name: 'Bruce Lee', score: 84 },
    '22222': { id: '22222', name: 'Jackie Chen', score: 93 },
    '33333': { id: '33333', name: 'Jet Li', score: 88 }
};

// Create HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL and query parameters
    const url = new URL(req.url, `http://${req.headers.host}`);
    
    if (url.pathname === '/api/score') {
        const studentId = url.searchParams.get('student_id') || url.searchParams.get('studnt_id');

        if (!studentId) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('Error: student_id or studnt_id is required');
            return;
        }

        const studentData = students[studentId];

        if (studentData) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(studentData));
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Error: Student not found');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Error: Not Found');
    }
});

// Start the server
const port = 8000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

