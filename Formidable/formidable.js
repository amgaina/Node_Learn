const formidable = require("formidable");
const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    if (req.url === "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, (err, fields, files) => {
        var oldPath = files.fileToUpload.filepath;
        var newpath =
          "C:/Users/AbhishekAmgain/" + files.filetoupload.originalFileName;
        fs.rename(oldPath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      fs.readFile("./form.html", (err, data) => {
        res.write(data);
        res.end();
      });
    }
  })
  .listen(4000);
