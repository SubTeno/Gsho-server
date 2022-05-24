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
const reading_1 = require("./reading");
const kanji_code_1 = require("./kanji_code");
const typeorm_1 = require("typeorm");
const kanji_1 = require("./kanji");
const sense_1 = require("./sense");
let entry = class entry extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], entry.prototype, "seq", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", Number)
], entry.prototype, "jlpt", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], entry.prototype, "rank", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], entry.prototype, "freq", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: true
    }),
    __metadata("design:type", Number)
], entry.prototype, "prio", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], entry.prototype, "noun", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], entry.prototype, "verb", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => kanji_code_1.kanji_code, (kanji_code) => kanji_code.entry_o),
    __metadata("design:type", Array)
], entry.prototype, "kanji_code", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => kanji_1.kanji, (kanji) => kanji.entry_o),
    __metadata("design:type", Array)
], entry.prototype, "kanji", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => reading_1.reading, (reading) => reading.entry_o),
    __metadata("design:type", Array)
], entry.prototype, "reading", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => sense_1.sense, (sense) => sense.entry_o),
    __metadata("design:type", Array)
], entry.prototype, "sense", void 0);
entry = __decorate([
    (0, typeorm_1.Entity)()
], entry);
exports.default = entry;
