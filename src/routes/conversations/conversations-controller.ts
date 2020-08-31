import express from 'express';
import {
    replyMessageToConversation,
    replyImageToConversation,
    replyFileToConversation,
    replyAudioToConversation,
    createNewWebhook,
    deleteWebhook,
    getAllWebhooks,
    createConversation,
    updateConversation
} from './conversations-service'

import {
    saveNewMessage,
    sendDefaultReply,
    updateMessage,
} from './messages-service';

export const router = express.Router({
    strict: true
});

router.post('/reply/message/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { message } = req.body;
        const operationResult = await replyMessageToConversation(id, message);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
});

router.post('/reply/image/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = await replyImageToConversation(id, url, caption);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
});

router.post('/reply/file/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = await replyFileToConversation(id, url, caption);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
});

router.post('/reply/audio/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { url, caption } = req.body;
        const operationResult = await replyAudioToConversation(id, url, caption);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
});

router.post('/create/webhook', (req, res, next) => {
    try {
        const { events, channelId, url } = req.body;
        const operationResult = createNewWebhook(events, channelId, url);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
});

router.post('/message/new', (req, res, next) => {
    try {
        console.log(req.body);
    } catch (err) {
        next(err);
    }
});

router.delete('/delete/webhook/:id', (req, res, next) => {
    try {
        const { id } = req.params;
        const operationResult = deleteWebhook(id);
        res.json(operationResult);
    } catch (err) {
        next(err)
    }
});

router.get('/all/webhook', (req, res, next) => {
    try {
        const operationResult = getAllWebhooks();
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
});

router.post('/event', async (req, res, next) => {
    try {
        const { type, message, conversation, contact } = req.body;

        let eventResponse = null;

        switch (type) {
            case "message.created":

                eventResponse = await saveNewMessage(message);

                if (message && message.direction === 'received' && message.type === 'text') sendDefaultReply(message);

                break;

            case "conversation.created":

                conversation.contact = contact;

                eventResponse = await createConversation(conversation);
                eventResponse = await replyMessageToConversation(message.id, 'Hola! Bienvenido al bot')

                break;

            case "conversation.updated":

                conversation.contact = contact;

                eventResponse = await updateConversation(conversation);

                break;

            case "message.updated":

                eventResponse = await updateMessage(message);

                break;

        }
        res.json({})
    } catch (err) {
        next(err)
    }
});




