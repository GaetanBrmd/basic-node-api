"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schedule_1 = __importDefault(require("node-schedule"));
const jobs_1 = __importDefault(require("../jobs/jobs"));
exports.default = () => {
    node_schedule_1.default.scheduleJob('*/1 * * * *', jobs_1.default.sampleJob1);
    // ns.schedule('* 10 * 5',jobs.sampleJob2);
    console.log('Jobs loaded 🔥 !');
};
//# sourceMappingURL=jobs.loader.js.map