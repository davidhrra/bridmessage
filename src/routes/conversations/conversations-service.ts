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
            return;
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
            return;
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
            return;
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
            return;
        }
        console.log(response);
    });
}

export function createNewConversationByChannel(number: string, channelId: string) {
    messagebird.conversations.start({
        to: number,
        channelId: channelId,
        type: 'text',
        content: {
            text: 'Hello!'
        }
    }, function (err, response) {
        if (err) {
            console.log(err);
            return;
        }
        console.log(response);
    });
}

export function createNewWebhook(events: string[], channelId: string, url: string){
    messagebird.conversations.webhooks.create({events, channelId, url}, function(err, response){
        if(err){
            console.log(err)
            return;
        }
        console.log(response);
    })
}

export function deleteWebhook(id:string){
    messagebird.conversations.webhooks.delete(id, function(err, response){
        if(err){
            console.log(err)
            return;
        }
        console.log(response);
    })
}

export function getAllWebhooks(){
    messagebird.conversations.webhooks.list(100, 0, function(err, response){
        if(err){
            console.log(err)
            return;
        }
        console.log(response);
    })
}
