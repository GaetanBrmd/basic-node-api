"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const events_1 = require("events");
const typedi_1 = require("typedi");
let EventHandler = class EventHandler extends events_1.EventEmitter {
    constructor() {
        super();
        this.nb = 0;
        this.on('event1', () => {
            console.log('Un event sauvage apparait 🖐 !');
            this.nb++;
        });
        this.on('event2', () => console.log("Nb d'events lancés :", this.nb));
    }
};
EventHandler = __decorate([
    typedi_1.Service(),
    __metadata("design:paramtypes", [])
], EventHandler);
exports.default = EventHandler;
//# sourceMappingURL=events.js.map