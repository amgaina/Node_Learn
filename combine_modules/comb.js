const fs = require("fs");
const url = require("url");
const http = require("http");

const server = http.createServer((req, res) => {
  let q = url.parse(req.url, true);
  let filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { content: "text/html" });
      return res.end("404 Error Not Found");
    }
    res.writeHead(200, { content: "text/html" });
    res.end(data);
  });
});
const port = 4000;
server.listen(port, (err) => {
    if(err){
        throw err;
    }
  console.log("Server listening on port " + port);
});
