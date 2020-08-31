import {
    replyMessageToConversation,
    replyImageToConversation,
    replyFileToConversation,
    replyAudioToConversation,
} from './conversations-service'
const Message = require('../../models/Message');

export async function saveNewMessage(message) {
    try {
        const newMessage = new Message(message);
        const savedMessage = await newMessage.save(message);
        return savedMessage;
    } catch (err) {
        return err;
    }
}

export async function updateMessage(message) {
    try {
        const updatedMessage = await Message.findOneAndUpdate({ id: message.id }, message);
        return updatedMessage;
    } catch (err) {
        return err;
    }
}

export async function sendDefaultReply(message) {
    const { conversationId, content } = message;

    if (content.text.toLowerCase() === 'audio') {

        const url = "https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg";
        const caption = 'audio.ogg';

        replyAudioToConversation(conversationId, url, caption);

    } if (content.text.toLowerCase() === 'image') {

        const url = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png";
        const caption = 'imagen.png';

        replyImageToConversation(conversationId, url, caption);

    } if (content.text.toLowerCase() === 'file') {

        const url = "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        const caption = 'dummy.pdf';

        replyFileToConversation(conversationId, url, caption);

    } if (content.text.toLowerCase() === 'text') {
        const message = 'Texto de prueba';

        replyMessageToConversation(conversationId, message);

    }
}