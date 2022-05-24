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
exports.gloss = void 0;
const typeorm_1 = require("typeorm");
const sense_1 = require("./sense");
let gloss = class gloss {
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], gloss.prototype, "sID", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], gloss.prototype, "gloss", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => sense_1.sense, (sense) => sense.gloss_o),
    (0, typeorm_1.JoinColumn)({
        name: "sID",
    }),
    __metadata("design:type", sense_1.sense)
], gloss.prototype, "sense", void 0);
gloss = __decorate([
    (0, typeorm_1.Entity)()
], gloss);
exports.gloss = gloss;
