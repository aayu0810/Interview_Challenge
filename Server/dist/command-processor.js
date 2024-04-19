"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCommandProcessor = void 0;
const pictures_1 = require("./pictures");
// class for holding the JSON-RPC command in a format that stringifies well
class JsonRpcCommand {
    constructor(method, result = {}, id, error) {
        this.method = method;
        this.result = result;
        this.id = id;
        this.error = error;
        this.jsonrpc = '2.0';
    }
}
// Manages communication with the client, interpeting the commands
// Also sends random updates
class ClientCommandProcessor {
    constructor(socket) {
        this.socket = socket;
        this.pictureCommands = new pictures_1.PicturesNamespace();
        // Set up the socket listener to receive commands,
        // massaging them down to a message we can use
        this.socket.on("message", (message) => {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage != null
                && parsedMessage.hasOwnProperty("jsonrpc")
                && parsedMessage.jsonrpc === '2.0'
                && parsedMessage.hasOwnProperty("id")
                && parsedMessage.hasOwnProperty("method")
                && parsedMessage.hasOwnProperty("params")) {
                this.processClientMessage(parsedMessage.id, parsedMessage.method, parsedMessage.params);
            }
            else {
                console.warn("Invalid message format: ", message);
            }
        });
    }
    startImageUpdating() {
        this.imageUpdateTimer = setInterval(this.updateImage.bind(this), ClientCommandProcessor.IMAGE_UPDATE_INTERVAL);
    }
    isImageUpdating() {
        return this.imageUpdateTimer != null;
    }
    stopUpdatingImage() {
        clearInterval(this.imageUpdateTimer);
    }
    updateImage() {
        this.pictureCommands.setPictureSelected(Math.floor(Math.random() *
            this.pictureCommands.getPictureSelector().options.length));
        this.pictureCommands.setPictureSelectorEnabled(Math.random() < 0.7);
        this.sendMessage(new JsonRpcCommand(pictures_1.PicturesNamespace.GET_PICTURE_SELECTOR, this.pictureCommands.getPictureSelector()));
    }
    processClientMessage(id, method, params) {
        switch (method) {
            case pictures_1.PicturesNamespace.GET_PICTURE_SELECTOR:
                this.sendMessage(new JsonRpcCommand(method, this.pictureCommands.getPictureSelector(), id));
                if (!this.isImageUpdating()) {
                    this.startImageUpdating();
                }
                break;
            default:
                this.sendMessage(new JsonRpcCommand(method, undefined, id, "Cannot process unknown method " + method));
        }
    }
    sendMessage(message) {
        this.socket.send(JSON.stringify(message));
    }
}
exports.ClientCommandProcessor = ClientCommandProcessor;
// time(ms) between random image updates
ClientCommandProcessor.IMAGE_UPDATE_INTERVAL = 2000;
//# sourceMappingURL=command-processor.js.map