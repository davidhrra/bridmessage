import {Schema} from 'mongoose';
const mongoose = require('mongoose');

const Conversation = new Schema({
    id: String,
    contact: Object,
    channels: [Schema.Types.Mixed],
    status: String,
    messages: Object,
    createdDatetime: Date,
    updatedDatetime: Date,
    lastReceivedDatetime: Date,
    lastUsedChannelId: String,
});

module.exports = mongoose.model('Conversation', Conversation);