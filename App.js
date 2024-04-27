const http = require("http");

// req --> request and res --> resolve
const server = http.createServer((req, res) => {
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
server.listen(4000);
