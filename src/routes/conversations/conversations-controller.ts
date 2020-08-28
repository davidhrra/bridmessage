import express from 'express';
import {
    replyMessageToConversation,
    replyImageToConversation,
    replyFileToConversation,
    replyAudioToConversation,
    createNewWebhook,
    deleteWebhook,
    getAllWebhooks,
} from './conversations-service'

import {
    saveNewMessage
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
                const res = await saveNewMessage(message);
                console.log(res);
                break;
            case "conversation.created":
                con
        }
        res.json({})
    } catch (err) {
        next(err)
    }
});


