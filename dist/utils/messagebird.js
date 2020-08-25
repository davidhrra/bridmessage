"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagebird = void 0;
const messagebird_1 = __importDefault(require("messagebird"));
exports.messagebird = messagebird_1.default(process.env.PROD_KEY, null, ["ENABLE_CONVERSATIONSAPI_WHATSAPP_SANDBOX"]);
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
//# sourceMappingURL=messagebird.js.map