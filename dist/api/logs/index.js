"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var router = express_1.default.Router();
router.get('', routes_1.getList);
router.get('/:logFileName', routes_1.getLog);
router.get('/:logFileName', routes_1.deleteLog);
exports.default = router;
