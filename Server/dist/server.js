"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const command_processor_1 = require("./command-processor");
const pictures_1 = require("./pictures");
// Sets up the listener on port 3000 and passes each new client connection
// to a ClientCommandProcessor to manage
class MainServer {
    constructor() {
        this.clientCommandProcessors = [];
        this.initSocketConnection();
    }
    initClientListener(socket) {
        // TODO: clean up old client connections
        // create a new command processor to handle the new client connection
        this.clientCommandProcessors.push(new command_processor_1.ClientCommandProcessor(socket));
    }
    initSocketConnection() {
        // set up socket.io and bind it to our http server.
        const app = express();
        //initialize a simple http server
        const server = http.createServer(app);
        //initialize the WebSocket server instance
        const wss = new WebSocket.Server({ server });
        wss.on("connection", this.initClientListener.bind(this));
        // Setup HTTP GET route to return a list of names
        app.get("/getAllImages", (req, res) => {
            const picturesNamespace = new pictures_1.PicturesNamespace();
            res.json(picturesNamespace.getPictureSelector()); // Send the list of names as a JSON response
        });
        // start listening on port 3000
        server.listen(3000, function () {
            console.log("Server listening on *:3000");
        });
    }
}
const mainServer = new MainServer();
//# sourceMappingURL=server.js.map