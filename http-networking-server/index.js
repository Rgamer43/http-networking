"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const host = 'localhost';
const port = 8000;
const requestListener = (req, res) => {
    console.log("Got connection...");
    res.writeHead(200);
    res.end("Hello.");
    console.log("Completed connection");
};
const server = http_1.default.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on https://' + host + ':' + port);
});
