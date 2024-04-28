// Way to export the module (function) to make it accessible by other files in the node application.

const sayHi = (name) =>{
    console.log("Hello" + name);
}
module.exports = sayHi;