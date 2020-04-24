"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Ici on gère les status, la mise en forme de la réponse et les appels aux fonctions des services
const user_service_1 = __importDefault(require("../services/user.service"));
const test = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Vu du controller :', req.body);
    const userServiceInstance = new user_service_1.default();
    return res.status(200).json({
        messageController: `Tu as post avec le nom ${req.body.name}`,
        messageService: yield userServiceInstance.sayHelloToUser(req.body.name),
    });
});
exports.default = {
    test,
};
//# sourceMappingURL=user.controller.js.map