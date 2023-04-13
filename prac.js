const http = require('http');
const fs = require('fs');
var result;
const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        res.write('<html>');
        res.write('<head><title>Test Nodejs</title><head>')
        res.write('<body>');
        res.write('<h1>Welcome Home</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/about') {
        res.write('<html>');
        res.write('<head><title>About us</title><head>')
        res.write('<body>');
        res.write('<h1>Welcome to About Us Page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/node') {
        res.write('<html>');
        res.write('<head><title>Project</title><head>');
        res.write('<body>');
        res.write('<h1>Welcome to my Node Js Project</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if (req.url === '/') {
        res.write(`<html><body><h3>${result}</h3><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body></html>`);
        return res.end();
    }

    else if (req.url === '/message' && req.method === 'POST') {
        const data = [];
        req.on('data', (chunk) => {
            data.push(chunk);
        });
        return req.on('end', () => {
            const parsedData = Buffer.concat(data).toString();
            const body = parsedData.split('=')[1];
            result = body;
            fs.writeFile('message.txt', body, (err) => {
                res.statusCode = '302';
                res.setHeader('Location', '/');
                return res.end();
            });
        })

    }
})
server.listen('3000');