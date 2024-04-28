// Asynchronous file reading using the Promise

const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// getText("./Content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

const start = async () => {
  try {
    const first = await getText("./Content/first.txt");
    const second = await getText("./Content/second.txt");
    console.log(first + second);
  } catch (err) {
    console.log(err);
  }
};
start();
console.log("Completed");
