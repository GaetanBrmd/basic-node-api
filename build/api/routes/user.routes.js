"use strict";
//Liste de toutes les routes et de leur requirements avec celebrate
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = __importDefault(require("../middlewares"));
const celebrate_1 = require("celebrate");
const user_controller_1 = __importDefault(require("../../controllers/user.controller"));
const route = express_1.Router();
exports.default = (app) => {
    app.use('/user', route);
    route.get('/me', middlewares_1.default.isAuth, (req, res) => {
        return res.json({ user: 'me' }).status(200);
    });
    route.post('/us', middlewares_1.default.isAuth, celebrate_1.celebrate({ body: celebrate_1.Joi.object({ name: celebrate_1.Joi.string().required(), nb: celebrate_1.Joi.number().integer().max(1000).required() }) }), user_controller_1.default.test);
};
//# sourceMappingURL=user.routes.js.map