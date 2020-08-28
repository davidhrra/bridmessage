const Message = require('../../models/Message')

export async function saveNewMessage(message){
    try{
        const newMessage = new Message(message);
        const savedMessage = await newMessage.save(message);
        return savedMessage;
    }catch(err){
        return err;
    }
}