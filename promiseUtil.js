const { readFile, writeFile } = require("fs").promises;

// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  const first = await readFile("./Content/first.txt", "utf-8");
  const second = await readFile("./Content/second.txt", "utf-8");
  console.log(first, second);
  await writeFile(
    "./Content/textFromUtil.txt",
    "This is the text coming from the file named promiseUtil.js"
  );
};
start();
console.log("Reading and Writing the file......");
