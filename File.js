// This is asynchronous Approach to read the file.

const { readFile, writeFile, rename } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    console.log(second);
    writeFile(
      "./content/result-async.txt",
      " This is a new text added to learn about the async.",
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});

// rename("./Content/last.txt", "./Content/first.txt", function (err, data) {
//   if (err) throw err;
//   console.log("rename");
//   console.log(data);
// });

// unlink is another method to delete the file from our directory. unlink('./Content/)

// unlink("./Content/test.txt", function (err, data) {
//   if (err) throw err;
//   console.log(data);
// });
