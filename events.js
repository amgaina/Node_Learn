//Events Module in Node

const event = require("events");
const eventemitter = new event.EventEmitter();

const listen = () => {
  console.log("I listened you. Thank you.");
};

eventemitter.on("shout", listen);
eventemitter.emit("shout");
