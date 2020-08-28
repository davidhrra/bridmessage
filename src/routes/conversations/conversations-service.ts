import messagebird from '../../utils/message-bird';
import { BASE_MESSSAGE_BIRD } from '../../config';
import Axios from 'axios';
const Conversation = require('../../models/Conversation')

export async function replyMessageToConversation(id: string, message: string) {
    try {
        const url = `${BASE_MESSSAGE_BIRD}/conversations/${id}/messages`;
        const res = await Axios.post(url, {
            type: 'text',
            content: {
                text: message
            }
        });
        return res.data;
    } catch (err) {
        return err.response.data;
    }
}

export async function replyImageToConversation(id: string, url: string, caption) {
    try {
        const requestUrl = `${BASE_MESSSAGE_BIRD}/conversations/${id}/messages`;
        const res = await Axios.post(requestUrl, {
            type: 'image',
            content: {
                image: {
                    url: url,
                    caption: caption
                }
            }
        });
        return res.data;
    } catch (err) {
        return err.response.data;
    }
}

export async function replyFileToConversation(id: string, url: string, caption) {
    try {
        const requestUrl = `${BASE_MESSSAGE_BIRD}/conversations/${id}/messages`;
        const res = await Axios.post(requestUrl, {
            type: 'file',
            content: {
                file: {
                    url: url,
                    caption: caption
                }
            }
        });
        return res.data;
    } catch (err) {
        return err.response.data;
    }
}

export async function replyAudioToConversation(id: string, url: string, caption) {
    try {
        const requestUrl = `${BASE_MESSSAGE_BIRD}/conversations/${id}/messages`;
        const res = await Axios.post(requestUrl, {
            type: 'audio',
            content: {
                audio: {
                    url: url,
                    caption: caption
                }
            }
        });
        return res.data;
    } catch (err) {
        return err.response.data;
    }
}

export function createNewWebhook(events: string[], channelId: string, url: string) {
    messagebird.conversations.webhooks.create({ events, channelId, url }, function (err, response) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(response);
    })
}

export function deleteWebhook(id: string) {
    messagebird.conversations.webhooks.delete(id, function (err, response) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(response);
    })
}

export function getAllWebhooks() {
    messagebird.conversations.webhooks.list(100, 0, function (err, response) {
        if (err) {
            console.log(err)
            return;
        }
        console.log(response);
    })
}

export async function createConversation(conversation:any){
    try{
        const newConversation = new Conversation(conversation);
        const createdConversation =  await newConversation.save();
        return createdConversation;
    }catch(err){
        return err;
    }
}