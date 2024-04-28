const url = require('url');

const filename = "http://localhost:8080/default.htm?year=2024&month=april&day=sunday";
const q = url.parse(filename, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

let qData = q.query;    // Object { year: 2024, month: "april", day: "sunday"}
console.log(qData.year);
console.log(qData.month);
console.log(qData.day);