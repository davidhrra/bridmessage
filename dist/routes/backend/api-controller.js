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
const Conversation = require('../../models/Conversation');
const Message = require('../../models/Message');
exports.router = express_1.default.Router({
    strict: true
});
exports.router.get('/conversations', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conversations = yield Conversation.find({});
        res.json({ conversations });
    }
    catch (err) {
        next(err);
    }
}));
exports.router.get('/messages/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const messages = yield Message.find({ conversationId: id });
        res.json({ messages });
    }
    catch (err) {
        next(err);
    }
}));
//# sourceMappingURL=api-controller.js.map