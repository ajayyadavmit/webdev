// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });

fetch("https://ajayyadav.com.np/")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response;
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error("Fetch error:", error);
    });