import http, { RequestListener } from "http";

const host: string = 'localhost';
const port: number = 8000;

const requestListener: RequestListener = (req: any, res: any) => {
    console.log("Got connection...");
    res.writeHead(200);
    res.end("Hello.");
    console.log("Completed connection");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log('Server is running on https://' + host + ':' + port);
});
