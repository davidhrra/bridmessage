"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const conversations_service_1 = require("./conversations-service");
const messages_service_1 = require("./messages-service");
exports.router = express_1.default.Router({
    strict: true
});
exports.router.post('/reply/message/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { message } = req.body;
        const operationResult = yield conversations_service_1.replyMessageToConversation(id, message);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
}));
exports.router.post('/reply/image/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = yield conversations_service_1.replyImageToConversation(id, url, caption);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
}));
exports.router.post('/reply/file/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = yield conversations_service_1.replyFileToConversation(id, url, caption);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
}));
exports.router.post('/reply/audio/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = yield conversations_service_1.replyAudioToConversation(id, url, caption);
        res.json(operationResult);
    }
    catch (err) {
        next(err);
    }
}));
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
exports.router.post('/event', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { type, message, conversation, contact } = req.body;
        let eventResponse = null;
        switch (type) {
            case "message.created":
                eventResponse = yield messages_service_1.saveNewMessage(message);
                if (message && message.direction === 'received' && message.type === 'text')
                    messages_service_1.sendDefaultReply(message);
                break;
            case "conversation.created":
                conversation.contact = contact;
                eventResponse = yield conversations_service_1.createConversation(conversation);
                eventResponse = yield conversations_service_1.replyMessageToConversation(message.id, 'Hola! Bienvenido al bot');
                break;
            case "conversation.updated":
                conversation.contact = contact;
                eventResponse = yield conversations_service_1.updateConversation(conversation);
                break;
            case "message.updated":
                eventResponse = yield messages_service_1.updateMessage(message);
                break;
        }
        res.json({});
    }
    catch (err) {
        next(err);
    }
}));
//# sourceMappingURL=conversations-controller.js.map