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
        const { type, message } = req.body;
        switch (type) {
            // case "message.created":
            //     if (message && message.direction === 'received' && message.type === 'text') {
            //         const { conversationId, content } = message;
            //         if (content.text.toLowerCase() === 'audio') {
            //             const url = "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg";
            //             const caption = 'audio.ogg';
            //             replyAudioToConversation(conversationId, url, caption);
            //         } if (content.text.toLowerCase() === 'image') {
            //             const url = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png";
            //             const caption = 'imagen.png';
            //             replyImageToConversation(conversationId, url, caption);
            //         } if (content.text.toLowerCase() === 'file') {
            //             const url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
            //             const caption = 'dummy.pdf';
            //             replyFileToConversation(conversationId, url, caption);
            //         } if (content.text.toLowerCase() === 'text') {
            //             const message = 'Texto de prueba';
            //             replyMessageToConversation(conversationId, message);
            //         }
            //     }
            //     break;
            case "message.created":
                const res = yield messages_service_1.saveNewMessage(message);
                console.log(res);
                break;
            case "conversation.created":
                con;
        }
        res.json({});
    }
    catch (err) {
        next(err);
    }
}));
//# sourceMappingURL=conversations-controller.js.map