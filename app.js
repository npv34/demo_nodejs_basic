const http = require('http');
const handler = require('./handler');
const PORT = 3000;

const server = http.createServer(async(req,res) => {
    const url = req.url;
    const method = req.method;
    await handler.getStaticFiles(req, res);
    switch(url){
        case "/":
            await handler.getHomePage(req,res);
            break;
        case "/admin":
            await handler.getAdminPage(req,res)
            break;
        case "/login":
            if(method === 'POST') {
                // xu ly dang nhap
                handler.login(req,res);
            } else{
                await handler.getLoginPage(req, res);
            }
            break;
        default:
            res.end();
    }
});

server.listen(PORT, () => {
  console.log('Server running on port 3000');
});