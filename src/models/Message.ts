import {Schema} from 'mongoose';
const mongoose = require('mongoose');

const Message = new Schema({
    messageChannelId: String,
    conversationId: String,
    id: String,
    channelId: String,
    platform: String,
    to: String,
    from: String,
    direction: String,
    status: String,
    type:String,
    content: Object,
    createdDatetime: Date,
    updatedDatetime: Date,
    source: Object,
    tag: Object,
});

module.exports = mongoose.model('Message', Message);