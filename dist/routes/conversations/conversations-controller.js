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
exports.router.post('/create/conversation/:number', (req, res, next) => {
    try {
        const { number } = req.params;
        const channelId = '03c0f0d45d33456bbbc7015fa84ead4d';
        const operationResult = conversations_service_1.createNewConversationByChannel(number, channelId);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/create/webhook', (req, res, next) => {
    try {
        const { events, channelId, url } = req.body;
        const operationResult = conversations_service_1.createNewWebhook(events, channelId, url);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/message/new', (req, res, next) => {
    try {
        console.log(req.body);
    }
    catch (err) {
        next(err);
    }
});
exports.router.delete('/delete/webhook/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const operationResult = conversations_service_1.deleteWebhook(id);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.get('/all/webhook', (req, res, next) => {
    try {
        const operationResult = conversations_service_1.getAllWebhooks();
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
});
exports.router.post('/event', (req, res, next) => {
    try {
        const { type, message } = req.body;
        switch (type) {
            case "message.created":
                if (message && message.direction === 'received' && message.type === 'text') {
                    const { conversationId, content } = message;
                    if (content.text.toLowerCase() === 'audio') {
                        const url = "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg";
                        const caption = 'audio.ogg';
                        conversations_service_1.replyAudioToConversation(conversationId, url, caption);
                    }
                    if (content.text.toLowerCase() === 'image') {
                        const url = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png";
                        const caption = 'imagen.png';
                        conversations_service_1.replyImageToConversation(conversationId, url, caption);
                    }
                    if (content.text.toLowerCase() === 'file') {
                        const url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
                        const caption = 'dummy.pdf';
                        conversations_service_1.replyFileToConversation(conversationId, url, caption);
                    }
                    if (content.text.toLowerCase() === 'text') {
                        const message = 'Texto de prueba';
                        conversations_service_1.replyMessageToConversation(conversationId, message);
                    }
                }
                break;
        }
        console.log(req.body);
        res.json({});
    }
    catch (err) {
        next(err);
    }
});
//# sourceMappingURL=conversations-controller.js.map