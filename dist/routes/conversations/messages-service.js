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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDefaultReply = exports.updateMessage = exports.saveNewMessage = void 0;
const conversations_service_1 = require("./conversations-service");
const Message = require('../../models/Message');
function saveNewMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newMessage = new Message(message);
            const savedMessage = yield newMessage.save(message);
            return savedMessage;
        }
        catch (err) {
            return err;
        }
    });
}
exports.saveNewMessage = saveNewMessage;
function updateMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const updatedMessage = yield Message.findOneAndUpdate({ id: message.id }, message);
            return updatedMessage;
        }
        catch (err) {
            return err;
        }
    });
}
exports.updateMessage = updateMessage;
function sendDefaultReply(message) {
    return __awaiter(this, void 0, void 0, function* () {
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
    });
}
exports.sendDefaultReply = sendDefaultReply;
//# sourceMappingURL=messages-service.js.map