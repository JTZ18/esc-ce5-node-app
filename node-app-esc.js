// Write the code for a Node.js server. This server should listen on a port of your choice and be
// able to display the following three pages:
// 1. /index.html
// 2. /about.html
// 3. /contact.html
// Each page should contain HTML code, including a header and body.
// The body should contain text formatted (with some css). In addition: about should contain an
// image, and contact a link to an email (mailto:yourown@emailaddress.com [use your own
// address, please])
// Any other incorrect request should be handled by sending a 404 page (with HTML code).


//Importing express module
const express = require("express")
const app = express()
const path = require("path")

app.use(express.static('public'))
app.use(express.static('views'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


app.get('', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/contact.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/about.html'))
})
  
// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})

// Handling non matching request from the client
app.use((req, res, next) => {
    res.status(404).send(
       "<h1>Page not found on the server</h1>")
})
  
// Server setup
app.listen(3000, () => {
    console.log(`Server running at http://${"localhost"}:${3000}/`)
})


// const http = require('http');
// const fs = require('fs');
// const url = require('url');
// const path = require('path');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer(function(request, response) {
//     var uri = url.parse(request.url).pathname;
//     var filename = path.join(process.cwd(), uri);
//     fs.existsSync(filename, function(exists) {
//         if (!exists) {
//             response.sendHeader(404, {"Content-Type": "text/plain"});
//             response.write("404 Not Found\n");
//             response.close();
//             return;
//         }

//         fs.readFile(filename, "binary", function(err, file) {
//             if (err) {
//                 response.sendHeader(500, {"Content-Type": "text/plain"});
//                 response.write(err + "\n");
//                 response.close();
//                 return;
//             }

//             response.sendHeader(200);
//             response.write(file, "binary");
//             response.close();
//         });  
//     });  
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
