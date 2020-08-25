"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const conversations_service_1 = require("./conversations-service");
exports.router = express_1.default.Router({
    strict: true
});
exports.router.post('/reply/message/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const { message } = req.body;
        const operationResult = conversations_service_1.replyMessageToConversation(id, message);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/reply/image/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = conversations_service_1.replyImageToConversation(id, url, caption);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/reply/file/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = conversations_service_1.replyFileToConversation(id, url, caption);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/reply/audio/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = conversations_service_1.replyAudioToConversation(id, url, caption);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/create/:number', (req, res, next) => {
    try {
        const { number } = req.params;
        const channeldId = '03c0f0d45d33456bbbc7015fa84ead4d';
        const operationResult = conversations_service_1.createNewConversationByChannel(number, channeldId);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=conversations-controller.js.map