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
//All the jobs functions
const user_model_1 = __importDefault(require("../models/user.model"));
const sampleJob1 = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Sample job fired 🙋 !');
    let report = yield user_model_1.default.findAll({ attributes: ['id', 'name'] });
    report.forEach((u) => {
        console.log(u.get());
    });
});
exports.default = {
    sampleJob1,
};
//# sourceMappingURL=jobs.js.map