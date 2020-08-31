"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = require("./routes");
const axios_1 = __importDefault(require("axios"));
require('dotenv').config();
axios_1.default.defaults.headers.common['Authorization'] = `AccessKey ${process.env.PROD_KEY}`;
axios_1.default.defaults.headers.common['Content-Type'] = 'application/json';
axios_1.default.defaults.headers.common['Accept'] = 'application/json';
mongoose_1.default.connect('mongodb://localhost/messageBirdTest')
    .then(db => console.log('MongoDB connected'))
    .catch(err => console.log(err));
const port = process.env.SERVER_PORT || 3000;
const app = express_1.default();
app.set('port', port);
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use('/conversations', routes_1.conversationsRouter);
app.use('/api', routes_1.APIRouter);
app.listen(app.get('port'), () => console.log('Server running on ' + app.get('port')));
//# sourceMappingURL=index.js.map