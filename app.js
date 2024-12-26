const http = require('http');
const handler = require('./handler');
const PORT = 3000;

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    // handler.getStaticFiles(req, res); ->  xu ly bat dong bo
    switch(url){
        case "/":
            handler.getHomePage(req,res);
            break;
        case "/admin":
            handler.getAdminPage(req,res);
            break;
        case "/login":
            if(method === 'POST') {
                // xu ly dang nhap
                handler.login(req,res);
            } else{
                handler.getLoginPage(req, res);
            }
            break;
        default:
            res.end();
    }
});

server.listen(PORT, () => {
  console.log('Server running on port 3000');
});