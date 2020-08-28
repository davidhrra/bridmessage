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
exports.getAllWebhooks = exports.deleteWebhook = exports.createNewWebhook = exports.createNewConversationByChannel = exports.replyAudioToConversation = exports.replyFileToConversation = exports.replyImageToConversation = exports.replyMessageToConversation = void 0;
const message_bird_1 = __importDefault(require("../../utils/message-bird"));
const config_1 = require("./../../config");
const axios_1 = __importDefault(require("axios"));
function replyMessageToConversation(id, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `${config_1.BASE_MESSSAGE_BIRD}/conversations/${id}/messages`;
            const res = yield axios_1.default.post(url, {
                type: 'text',
                content: {
                    text: message
                }
            });
            return res;
        }
        catch (err) {
            return err;
        }
    });
}
exports.replyMessageToConversation = replyMessageToConversation;
function replyImageToConversation(id, url, caption) {
    message_bird_1.default.conversations.reply(id, {
        type: 'image',
        content: {
            image: {
                url: url,
                caption: caption
            }
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}
exports.replyImageToConversation = replyImageToConversation;
function replyFileToConversation(id, url, caption) {
    message_bird_1.default.conversations.reply(id, {
        type: 'file',
        content: {
            file: {
                url: url,
                caption: caption
            }
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}
exports.replyFileToConversation = replyFileToConversation;
function replyAudioToConversation(id, url, caption) {
    message_bird_1.default.conversations.reply(id, {
        type: 'audio',
        content: {
            audio: {
                url: url,
                caption: caption
            }
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}
exports.replyAudioToConversation = replyAudioToConversation;
function createNewConversationByChannel(number, channelId) {
    message_bird_1.default.conversations.start({
        to: number,
        channelId: channelId,
        type: 'text',
        content: {
            text: 'Hello!'
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}
exports.createNewConversationByChannel = createNewConversationByChannel;
function createNewWebhook(events, channelId, url) {
    console.log(events);
    console.log(channelId);
    console.log(url);
    message_bird_1.default.conversations.webhooks.create({ events, channelId, url }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}
exports.createNewWebhook = createNewWebhook;
function deleteWebhook(id) {
    message_bird_1.default.conversations.webhooks.delete(id, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}
exports.deleteWebhook = deleteWebhook;
function getAllWebhooks() {
    message_bird_1.default.conversations.webhooks.list(100, 0, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}
exports.getAllWebhooks = getAllWebhooks;
//# sourceMappingURL=conversation-service.js.map