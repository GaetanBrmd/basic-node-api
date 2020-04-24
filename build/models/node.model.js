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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Node extends sequelize_1.Model {
    static start(database) {
        return __awaiter(this, void 0, void 0, function* () {
            Node.init({
                id: {
                    type: sequelize_1.DataTypes.INTEGER,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: new sequelize_1.DataTypes.STRING(128),
                    allowNull: false,
                },
            }, {
                tableName: 'nodes',
                sequelize: database,
            });
            return yield Node.sync({ force: true });
        });
    }
}
exports.default = Node;
Node.modelName = 'nodeModel';
//# sourceMappingURL=node.model.js.map