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
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config"));
const models_1 = __importDefault(require("../models"));
exports.default = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbConnection = new sequelize_1.Sequelize({
        database: config_1.default.database,
        dialect: 'sqlite',
        storage: ':memory:',
        logging: false,
    });
    if (dbConnection.authenticate()) {
        for (const m of models_1.default) {
            yield m.start(dbConnection);
            console.log('%s synced ♻ !', m.modelName);
        }
    }
    else {
        throw new Error('Database not connected 🙌 !');
    }
    console.log('Database loaded 🔥 !');
    return { dbConnection };
});
//# sourceMappingURL=db.loader.js.map