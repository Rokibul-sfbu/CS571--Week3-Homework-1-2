const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = parsedUrl.pathname;
    const iso = parsedUrl.searchParams.get('iso');

    if (pathname === '/api/parsetime' && iso) {
        const date = new Date(iso);
        const response = {
            hour: date.getUTCHours(),
            minute: date.getUTCMinutes(),
            second: date.getUTCSeconds(),
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    } else if (pathname === '/api/unixtime' && iso) {
        const date = new Date(iso);
        const response = {
            unixtime: date.getTime(),
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    } else {
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

// Get the port from the command line arguments
const port = process.argv[2];
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
