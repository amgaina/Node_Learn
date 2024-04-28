// Way to export the multiple module(writing module inside the curly braces) to make it accessible by other files in the node application.
// Here name is local(only accessible within this file) while abhi can be used by other file who import this module

//local
const name = "Abhishek Amgain";
//share
const abhi = "Abhi";
module.exports = { abhi };

//Built in Modules
// OS, PATH, FS, HTTP
