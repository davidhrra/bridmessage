"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require('mongoose');
const Conversation = new mongoose_1.Schema({
    id: String,
    contact: Object,
    channels: [mongoose_1.Schema.Types.Mixed],
    status: String,
    messages: Object,
    createdDatetime: Date,
    updatedDatetime: Date,
    lastReceivedDatetime: Date,
    lastUsedChannelId: String,
});
module.exports = mongoose.model('Conversation', Conversation);
//# sourceMappingURL=Conversation.js.map