"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
//import 'reflect-metadata';
exports.default = ({ dbConnection }) => {
    try {
        typedi_1.Container.set('db', dbConnection);
        //Container.set('mailService',mailgun({apiKey:config.email.apiKey,mail:config.email.mail}))
        console.log('Container loaded 🔥 !');
    }
    catch (e) {
        console.log('🔥 Error on dependency injector loader: %o', e);
        throw e;
    }
};
//# sourceMappingURL=dependencyInjector.js.map