import express from 'express';
import {
    replyMessageToConversation,
    replyImageToConversation,
    replyFileToConversation,
    replyAudioToConversation,
    createNewConversationByChannel
} from './conversations-service'

export const router = express.Router({
    strict: true
});

router.post('/reply/message/:id', (req, res, next) => {
    try {
        const {id} = req.params;
        const {message} = req.body;
        const operationResult = replyMessageToConversation(id, message);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
})

router.post('/reply/image/:id', (req, res, next) => {
    try {
        const {id} = req.params;
        const {url, caption} = req.body;
        const operationResult = replyImageToConversation(id, url, caption);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
})

router.post('/reply/file/:id', (req, res, next) => {
    try {
        const {id} = req.params;
        const {url, caption} = req.body;
        const operationResult = replyFileToConversation(id, url, caption);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
});

router.post('/reply/audio/:id', (req, res, next) => {
    try {
        const {id} = req.params;
        const {url, caption} = req.body;
        const operationResult = replyAudioToConversation(id, url, caption);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
})

router.post('/create/:number', (req, res, next) => {
    try {
        const {number} = req.params;
        const channeldId = '03c0f0d45d33456bbbc7015fa84ead4d'
        const operationResult = createNewConversationByChannel(number, channeldId);
        res.json(operationResult);
    } catch (err) {
        next(err);
    }
})


