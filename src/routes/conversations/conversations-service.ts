import messagebird from './../../utils/message-bird';

export function replyMessageToConversation(id: string, message: string) {
    messagebird.conversations.reply(id, {
        type: 'text',
        content: {
            text: message
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
        }
        console.log(response);
    });
}

export function replyImageToConversation(id: string, url: string, caption) {
    messagebird.conversations.reply(id, {
        type: 'image',
        content: {
            image: {
                url: url,
                caption: caption
            }
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
        }
        console.log(response);
    });
}

export function replyFileToConversation(id: string, url: string, caption) {
    messagebird.conversations.reply(id, {
        type: 'file',
        content: {
            file: {
                url: url,
                caption: caption
            }
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
        }
        console.log(response);
    });
}

export function replyAudioToConversation(id: string, url: string, caption) {
    messagebird.conversations.reply(id, {
        type: 'audio',
        content: {
            audio: {
                url: url,
                caption: caption
            }
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
        }
        console.log(response);
    });
}

export function createNewConversationByChannel(number: string, channelId: string) {
    console.log(number);
    messagebird.conversations.start({
        to: number,
        channelId: channelId,
        type: 'text',
        content: {
            text: 'Hello!'
        }
    }, function (err, response) {
        if (err) {
            return console.log(err);
        }
        console.log(response);
    });
}
