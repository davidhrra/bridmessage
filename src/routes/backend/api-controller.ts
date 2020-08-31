import express, { Router } from 'express';
const Conversation = require('../../models/Conversation');
const Message = require('../../models/Message');

export const router = express.Router({
    strict: true
});

router.get('/conversations', async (req, res, next) => {
    try {
        const conversations = await Conversation.find({});
        res.json({ conversations });
    } catch (err) {
        next(err);
    }
});

router.get('/messages/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const messages = await Message.find({ conversationId: id});
        res.json({ messages });
    } catch (err) {
        next(err);
    }
});