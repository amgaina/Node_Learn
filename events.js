//Events Module in Node
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, age) => {
  console.log("data received." + name + age);
});

customEmitter.on("response", () => {
  console.log("Some other logic.");
});

customEmitter.emit("response", "John", 34);
