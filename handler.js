const fs = require('fs');
const qs = require('qs');

const handler = {};

handler.getLoginPage = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    fs.readFile("./views/login.html", (err, data) => {
        if(err) {
            console.error("Error reading file:", err);
            res.writeHead(500);
            res.end("Error reading file");
            return;
        }
        res.write(data);
        res.end();
    });
}

handler.getHomePage = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    fs.readFile("./views/home.html", (err, data) => {
        if(err) {
            console.error("Error reading file:", err);
            res.writeHead(500);
            res.end("Error reading file");
            return;
        }
        res.write(data);
        res.end();
    });
}

handler.getAdminPage = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    fs.readFile("./views/admin.html", (err, data) => {
        if(err) {
            console.error("Error reading file:", err);
            res.writeHead(500);
            res.end("Error reading file");
            return;
        }
        res.write(data);
        res.end();
    });
}

handler.login = (req, res) => {
    let dataForm = []
    req.on('data', (chunk) => {
        dataForm.push(chunk);
    })
    req.on('end', () => {
        dataForm = Buffer.concat(dataForm).toString();
        // qs part data 
        const data = qs.parse(dataForm)
        // xy ly logic login
        const {email, password} = data;
        if(email == "admin@gmail.com" && password == "1234") {
            res.writeHead(301, {'Location': '/admin'})
            res.end();
        } else {
            console.log("Login fail");
            res.writeHead(301, {'Location': '/login'})
            res.end();
        }
    })
}

handler.getStaticFiles = (req, res) => {
    const url = req.url;
    const cssPattern = /css/;
    const jsPattern = /js/;
    if(cssPattern.test(url)) {
        console.log(1);
        res.setHeader('Content-Type', 'text/css');
        fs.readFile(`.${url}`, (err, data) => {
            if(err) {
                console.error("Error reading file:", err);
                res.writeHead(500);
                res.end("Error reading file");
                return;
            }
            res.write(data);
            res.end();
        });
    } else{
        console.log(2)
    }
}

module.exports = handler;