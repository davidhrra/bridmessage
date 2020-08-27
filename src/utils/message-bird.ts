import initMB from 'messagebird';
require('dotenv').config();

const messagebird = initMB(process.env.PROD_KEY, null, ["ENABLE_CONVERSATIONSAPI_WHATSAPP_SANDBOX"]);

export default messagebird;
