const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/home'){
        res.write('<html>');
        res.write('<head><title>Test Nodejs</title><head>')
        res.write('<body>');
        res.write('<h1>Welcome Home</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/about'){
        res.write('<html>');
        res.write('<head><title>About us</title><head>')
        res.write('<body>');
        res.write('<h1>Welcome to About Us Page</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    else if(req.url==='/node'){
        res.write('<html>');
        res.write('<head><title>Project</title><head>')
        res.write('<body>');
        res.write('<h1>Welcome to my Node Js Project</h1>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
})
server.listen('3000');