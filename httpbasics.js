// Basic way of creating the http server.

const http = require("http");

// req --> request and res --> resolve
const server = http.createServer((req, res) => {
    console.log("Request Event")
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page");
  } else {
    res.end(`
        <h1> Oop! Something went wrong </h1>
        <h1> We cannot find the page that you are looking for.`);
  }
});

// listen is asynchronous 
server.listen(4000, ()=>{
    console.log("Server listening on port 4000");
});
