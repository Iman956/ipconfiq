// server.mjs
const {createServer} = require('node:http');
const os = require('os');

const server = createServer((req, res) => {
    if(req.url == "/ip"){
        const interfaces = os.networkInterfaces();
        for (const interfaceName in interfaces) {
            const addresses = interfaces[interfaceName];
            for (const address of addresses) {
                if (address.family === 'IPv4' && !address.internal) {
                     res.end( address.address);
                }
            }
        }
        res.end("this ip address")
    }
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('server is running');
});

