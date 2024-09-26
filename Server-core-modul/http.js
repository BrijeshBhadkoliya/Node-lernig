// const { log } = require('console');
const https = require('http');

const port = 8000;
const port2 = 8080;


const server =(req,res) => {
    res.write("Hello, Welcome to my server")
    res.end();
};
const server2 =(req,res) => {
    res.write("Hello, Welcome to my server")
    res.end();
};
const start = https.createServer(server);
const start2 = https.createServer(server2);


start.listen(port, () => {
    console.log(`https://localhost:${port}/`);
    console.log("Welcome to my server");
    
});
start2.listen(port2, () => {
    console.log(`https://localhost:${port2}/`);
    console.log("Welcome to my server");
    
});