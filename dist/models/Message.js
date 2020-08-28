"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require('mongoose');
const Message = new mongoose_1.Schema({
    messageChannelId: String,
    conversationId: String,
    channelId: String,
    platform: String,
    to: String,
    from: String,
    direction: String,
    status: String,
    type: String,
    content: Object,
    createdDatetime: Date,
    updatedDatetime: Date,
    source: Object,
    tag: Object,
});
module.exports = mongoose.model('Message', Message);
//# sourceMappingURL=Message.js.map