const qs = require('qs');
const { readDataToFile } = require('./services/file.service');

const handler = {};

handler.getLoginPage = async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    const data = await readDataToFile("./views/login.html");
    res.write(data);
    res.end();
}

handler.getHomePage = async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    const data = await readDataToFile("./views/home.html");
    res.write(data);
    res.end();
}

handler.getAdminPage = async (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.statusCode = 200;
    const data = await readDataToFile("./views/admin.html");
    res.write(data);
    res.end();
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

handler.getStaticFiles = async (req, res) => {
    const url = req.url;
    const cssPattern = /css/;
    const jsPattern = /js/;
    if(cssPattern.test(url)) {
        res.setHeader('Content-Type', 'text/css');
        const data = await readDataToFile(`./${url}`);
        res.write(data);
        res.end();
    } else if(jsPattern.test(url)) {
        res.setHeader('Content-Type', 'text/js');
        const data = await readDataToFile(`./${url}`);
        res.write(data);
        res.end();
    }
}

module.exports = handler;