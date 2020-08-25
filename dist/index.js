"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = require("./routes");
require('dotenv').config();
const port = process.env.SERVER_PORT || 3000;
const app = express_1.default();
app.set('port', port);
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use('/conversations', routes_1.conversationsRouter);
app.listen(app.get('port'), () => console.log('Server running on ' + app.get('port')));
//# sourceMappingURL=index.js.map