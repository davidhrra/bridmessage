import initMB from 'messagebird';
require('dotenv').config();

const messagebird = initMB(process.env.PROD_KEY, null, ["ENABLE_CONVERSATIONSAPI_WHATSAPP_SANDBOX"]);

export default messagebird;

// messagebird.balance.read(function (err, data) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(data);
//   });

//   messagebird.conversations.list(20, 0, function (err, response:any) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(response);
//   });