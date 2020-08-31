"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIRouter = exports.conversationsRouter = void 0;
const conversations_controller_1 = require("./conversations/conversations-controller");
Object.defineProperty(exports, "conversationsRouter", { enumerable: true, get: function () { return conversations_controller_1.router; } });
const api_controller_1 = require("./backend/api-controller");
Object.defineProperty(exports, "APIRouter", { enumerable: true, get: function () { return api_controller_1.router; } });
//# sourceMappingURL=index.js.map